
const ProductId =async ({params}) => {

    const productId=(await params).id;

  return (
    <div>
        <h1>Product Id : {productId}  </h1>

      
    </div>
  )
}

export default ProductId
