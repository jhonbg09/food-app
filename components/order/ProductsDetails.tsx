import { OrderItem } from "@/src/types"

type ProductsDetailsProps = {
    item: OrderItem
}

export default function ProductsDetails({item}: ProductsDetailsProps) {
    console.log(item)
  return (
    <div>
      ProductsDetails
    </div>
  )
}
