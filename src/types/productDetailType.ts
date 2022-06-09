type ProductDetailType = {
  productId: number
  title: string
  cost: number
  detail: string
  createdAt: string
  productStatus: string
  image: { id: number; imageAddress: string }[]
  quantity: number
  likedAt: number
}

export default ProductDetailType
