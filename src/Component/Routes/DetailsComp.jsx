import { Link } from "react-router-dom";
import { Component } from "react";
import { Route } from "react-router-dom";
class DetailsCopmAsFun extends Component {
  render(){
      //image source 
      let imgScr="/images/"+this.props.location.SelectedObject.productimage;

      return (
        <div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
  <h1 class="row h-100 justify-content-center align-items-center">Product</h1>
      
    <div className="card" style={{width: "18rem"}}>
  

    <img className="card-img-top" src={imgScr} alt="Card image cap"/>

    <div className="card-body">
    <h5 className="card-title">Name: {this.props.location.SelectedObject.name}</h5>
      <p className="card-text">Price: {this.props.location.SelectedObject.price} LE</p>
      <p className="card-text">Product Description: {this.props.location.SelectedObject.productDescription}</p>

      <a onClick={()=>this.props.history.push("/")} className="btn btn-primary">Back Home</a>
    </div>
  </div>
   </div>
   </div>
  );
}
};

export default DetailsCopmAsFun;
