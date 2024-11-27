import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButtom from "@/components/ui/GoBackButtom"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import { notFound } from "next/navigation"

async function getProductById(id:number) {
    const product = await prisma.product.findUnique({
        where:{
            id
        }
    })
    if(!product){
        notFound()
    }
    return product
}

export default async function EdithProductsPage({params}: {params: { id:string }}) {
    const product = await getProductById(+params.id)
    console.log(product)
    return (
    <>
     <Heading>Editar Producto: {product.image}</Heading>

        <GoBackButtom/>

     <EditProductForm>
        <ProductForm
        product={product}
        />
     </EditProductForm>
    </>
  )
}
