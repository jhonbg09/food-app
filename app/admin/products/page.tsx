import { redirect } from "next/navigation"
import ProductsPagination from "@/components/products/ProductsPagination"
import ProductTable from "@/components/products/ProductsTable"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import ProductSearchForm from "@/components/products/ProductSearchForm"

async function productCount() {
  return await prisma.product.count() 
}

async function getProducts(page:  number, pageSize: number) {
  const skip = (page - 1) * pageSize
  const products = await prisma.product.findMany({
    /* paginacion */
    take: pageSize,
    skip,
    include: {
      category: true
    }
  })
  return products
}

export default async function ProductsPage({searchParams} : {searchParams: {page: string}}) {
  const page = +searchParams.page || 1 
  const pageSize = 10

  if(page < 0) redirect("/admin/products?page=1")
  
  const productsData =  getProducts(page, pageSize)
  const totalPRoductsData =  productCount()
  const [products, totalPRoducts] = await Promise.all([productsData, totalPRoductsData])
  const totalPages = Math.ceil(totalPRoducts / pageSize)
  
  
  
  return (
    <>
      <Heading>Administrar Productos</Heading>

      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <Link href={"/admin/products/new"} className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer">
          Crear Producto
        </Link>

        <ProductSearchForm/>
      </div>

      <ProductTable
        products= {products}
      />

      <ProductsPagination
        page={page}
        totalPages ={totalPages}

      />
    </>
  )
}
