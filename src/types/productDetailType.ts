type ProductDetailType = {
  productId: number
  title: string
  cost: number
  detail: string
  createdAt: string
  productStatus: string
  image: { id: number; imageAddress: string; imageName: string }[]
  quantity: number
  likedAt: number
  viewCount: number
  chatCount: number
}

export default ProductDetailType
