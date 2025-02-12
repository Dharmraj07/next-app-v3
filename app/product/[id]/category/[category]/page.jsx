
const page = async({params}) => {
  console.log(params);
    const category=(await params).category;
    const productId=(await params).id;
  return (
    <div>
        <h1>Product Id : {productId} and category is {category} </h1>
      
    </div>
  )
}

export default page
