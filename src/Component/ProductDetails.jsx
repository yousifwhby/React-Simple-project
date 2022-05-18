let ProductDetails=(props)=>{
console.log("🚀 ~ file: ProductDetails.jsx ~ line 2 ~ ProductDetails ~ prop", props.Details)

    // let prodDetails= prop.Data.map((item)=>{
    // console.log("🚀 ~ file: ProductDetails.jsx ~ line 4 ~ prodDetails ~ item", item)
    // return(
    
    //     <tr>
    //      <td>{item.id}</td>
    //      <td>{item.name}</td>
    //      <td>{item.price}</td>
    //      <td><img src={`images/${item.productimage}`}style={{width:'50px',height:'5npm0px'}}/></td>
    //      <td>{item.productDescription}</td>


    //      </tr>
    //      );
         
    // })
return(
   
    <div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
  <h1 class="row h-100 justify-content-center align-items-center">hello</h1>
      
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={`images/${props.Details.productimage}`} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: {props.Details.name}</h5>
      <p className="card-text">Price: {props.Details.price} LE</p>
      <p className="card-text">Product Description: {props.Details.productDescription}</p>

      <a onClick={()=>props.Homehandler()} className="btn btn-primary">Back Home</a>
    </div>
  </div>
  </div>
  </div>
  
    
)
}
export default ProductDetails;