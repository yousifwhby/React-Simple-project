import React from 'react'
class Add extends React.Component{
    
    state={
        _Id:0,
        _Name:"",
        _Price:0,
        _Image:"scisor.png",
        _Description:""
    };
    handlerInput=(eventobject)=>{
        this.setState({
            [eventobject.target.name]:eventobject.target.value
        })
    }
    render(){
        
        console.log("🚀 ~ file: Add.jsx ~ line 3 ~ classAddextendsReact.Component ~ props", this.props);
        return(
            <>
      <h3>Add New Product</h3>
      <span> ID</span>
        <input type="number" className="form-control" name="_Id" value={this.state._Id} onChange={this.handlerInput}/>

      <span> Name</span>

        <input type="text" className="form-control" name="_Name" value={this.state._Name} onChange={this.handlerInput}/>
      <span> Price</span>

        <input type="number" className="form-control" name="_Price" value={this.state._Price} onChange={this.handlerInput}/>
      <span> Decripation</span>

        <input type="text" className="form-control" name="_Description" value={this.state._Description} onChange={this.handlerInput}/>

        <input type="button" className='btn btn-primary' value={"Add Product"} onClick={()=>this.props.Data({id:this.state._Id,name:this.state._Name,price:this.state._Price,productimage:this.state._Image,productDescription:this.state._Description})}/>

      </>



)
}
    }
    export default Add;