import ProductDetails from './ProductDetails'
let Products =(props)=>{
// console.log("🚀 ~ file: Products.jsx ~ line 3 ~ Products ~ prop", prop)
    let prodDetails= props.Data.map((item,i)=>{
   
        
         return(
    
            <tr key={i}>
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td>{item.price}</td>
             <td><img src={`images/${item.productimage}`}style={{width:'50px',height:'50px'}}/></td>
             <td>{item.productDescription}</td>
             <td><input type="button" value="Remove" className='btn btn-danger' onClick={()=>props.Removehandler(i)}/> 

             <input type="button" value="Details" className='btn btn-success' onClick={()=>props.Detailshandler(i)} />
             </td>



             </tr>
             );
             
        })
    return(
        <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Product Image</th>
      <th scope="col">Product Descripation</th>
      <th scope="col">operations</th>


    </tr>
  </thead>
  <tbody>
      
      {prodDetails}
    
  </tbody>
</table>

    );

}
export default Products;