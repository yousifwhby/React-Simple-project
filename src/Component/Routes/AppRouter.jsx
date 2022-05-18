import { BrowserRouter as Router, Route } from "react-router-dom";
import ListComp from "./ListComp";
import AddComp from "./AddComp";
import DetailsCopmAsFun from "./DetailsComp";
import { Component } from "react";
import Header from "../Header";
import EditComp from "./EditComp";
import Footer from "../Footer";
import LoginForm from "../Routes/LoginForm";
import NotAuthorized from "../Routes/NotAuthorized";


class AppRouter extends Component {
  state = {
    Listofproducts:[
      {id:1,name:'Bottel',price:20,productimage:'bootel.png',productDescription:'Bottel'},
      {id:2,name:'Scissor',price:30,productimage:'scisor.png',productDescription:'Scissor'},
      {id:3,name:'Cream',price:100,productimage:'Creem.png',productDescription:'Loation'},
     ],
  };
  AddProduct=(_object)=> {
  console.log("🚀 ~ file: AppRouter.jsx ~ line 16 ~ AppRouter ~ _object", _object)
    let newarray=[...this.state.Listofproducts,_object];
    console.log("🚀 ~ file: AppRouter.jsx ~ line 18 ~ AppRouter ~ newarray", newarray)
     this.setState({
       Listofproducts:newarray,
      
 
     });
   };
   RemoveProduct=(_object)=>{
    this.state.Listofproducts.splice(_object,1);
    this.setState({
      Listofproducts:this.state.Listofproducts
    });
  };
  EditProduct=(_object,i)=>{
    this.state.Listofproducts[i]=_object;
    this.setState({
      Listofproducts:this.state.Listofproducts
    });
  };
  
  render() {
    return (
      <>
        <Router>
          <Header Logout={this.props.Logout}/>
          <Route component={(props)=><LoginForm  {...props}/>} path="/Login" exact />

          
          <Route component={(props) => <ListComp Removehandler={this.RemoveProduct}  Listofproducts={this.state.Listofproducts} {...props} BOMProps={props}/>} path="/" exact /> 
         
          <Route component={(props)=><AddComp AddRef={this.AddProduct} {...props}/>} path="/Add" exact />
          
          <Route component={(props)=><DetailsCopmAsFun {...props}/>} path="/Details/:id" exact/>

          <Route component={(props)=><EditComp EditeRef={this.EditProduct} {...props}/>} path="/Edit/:id" exact/>
          <Route component={(props)=><NotAuthorized  {...props}/>} path="/NotAuthorized" exact />

          <Footer/>
        </Router>
      </>
    );
  }
}

export default AppRouter;
