
import '../App.css';
import Header from './Header'
import Footer from './Footer'
import Products from './Products';
import React from 'react'
import Add from './Add';
import ProductDetails from './ProductDetails';


class App extends React.Component{
 dets={};
 state={

   Listofproducts:[
     {id:1,name:'Bottel',price:20,productimage:'bootel.png',productDescription:'Bottel'},
     {id:2,name:'Scissor',price:30,productimage:'scisor.png',productDescription:'Scissor'},
     {id:3,name:'Cream',price:100,productimage:'Creem.png',productDescription:'Loation'},
    ],
    showAdd:false,
    showDetails:false
  };
  AddProduct=(_object)=> {
   let newarray=[...this.state.Listofproducts,_object];
    this.setState({
      Listofproducts:newarray,
      showAdd:false,

    });
  };
  RemoveProduct=(_object)=>{
    this.state.Listofproducts.splice(_object,1);
    this.setState({
      Listofproducts:this.state.Listofproducts
    });

  };

  ProductDetails=(_object)=>{
  console.log("🚀 ~ file: App.jsx ~ line 39 ~ App ~ _object", _object)

   this.dets= this.state.Listofproducts[_object];

   console.log("🚀 ~ file: App.jsx ~ line 40 ~ App ~  this.dets",  this.dets)
   
   this.setState({
      showDetails:true
    });

   };
   BackHome=()=>{
    
    this.setState({
      showDetails:false
    });
   }
    render(){
    
            
      if (this.state.showAdd==false ) {
              if (this.state.showDetails==false)
                {
                  
                return (
                  <>
            <Header/>

              <Products Data={this.state.Listofproducts} Removehandler={this.RemoveProduct} Detailshandler={this.ProductDetails}/>
            
              <input type="button" value="Add Product" onClick={()=>this.setState({ showAdd:true})} className="btn btn-primary" />
              <Footer/>
            </>
          )
        }
          else {
                  return(
                    
                    <>
                     <Header/>
                  
            <ProductDetails  Details={this.dets} Homehandler={this.BackHome}/>
            <Footer/>
                        
                    </>
                    )
                }
    }
    

      else if (this.state.showAdd==true) {
        
          return (
            <>
            <Header/>
            <Add Data={this.AddProduct}/>

        
              <Footer/>      
              </>
            )
          }
    }

     



  }


export default App;


