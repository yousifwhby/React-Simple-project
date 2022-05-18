import { Link } from "react-router-dom";
import { Component } from "react";
import { Route } from "react-router-dom";
import Add from "../Add";
class ListComp extends Component {
  state={
    productsList:[],
    category: '',
   
   };
  GOTOAdd = () => {
    
    this.props.history.push("/Add");

  };
  onCategoryChangeHandler=(e)=>{
   
    this.setState({
        category: e.target.value
    })
}
   GetallProdcut=()=>{this.state.productsList= this.props.Listofproducts.map((item,i)=>{
    if(item.name.includes(this.state.category)==true){
        
       return(

       <tr key={i}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td><img src={`images/${item.productimage}`}style={{width:'50px',height:'50px'}}/></td>
        <td>{item.productDescription}</td>
        <td><input type="button" value="Remove" className='btn btn-danger' onClick={()=>this.props.Removehandler(i)}/> 

        <Link to={{ pathname:`/Details/${item.id}`, SelectedObject:item }} className='btn btn-success'>
                  Open Details
                </Link>
                <Link to={{ pathname:`/Edit/${item.id}`, SelectedObject:item ,index:i }} className='btn btn-success'>
                  Edit Product
                </Link>
        </td>
        </tr>
        );
     }
        
   });
   return this.state.productsList;
  }
  render() {
    
    return (
      <div>
        <div style={{width:"50%"}}>

        <span>Choose Catgorey</span>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.onCategoryChangeHandler}>
                 <option value="">All</option>

                <option value="Bottel">Bottel</option>
                <option value="Scissor">Scissor</option>
                <option value="Cream">Cream</option>
            </select>
        </div>
       
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
      
      {this.GetallProdcut()}
    
  </tbody>
</table>
        <Link
          to="/Add"
          className="btn btn-outline-primary" >Open Add</Link>

        
      </div>
    );
  }
}

export default ListComp;
