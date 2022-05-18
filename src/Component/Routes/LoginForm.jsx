import { Component } from "react";
import App from "../App";
import AppRouter from "./AppRouter";
class Login extends Component {
  state = {
    AdminData: {
      Name: "yousif",
      Pass: 123,
    },
    LogInUser: false,
    txtuser: "",
    txtpass: "",
  };
  handlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onLogout=()=>{
    this.setState({
      LogInUser: false,

    });
      console.log("🚀 ~ file: LoginForm.jsx ~ line 26 ~ Login ~ LogInUser", this.state.LogInUser)
    
  };

  onSubMitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    //get values ==>inputs
     let loginObjectUser = {
      Name: this.state.txtuser,
      Pass: parseInt(this.state.txtpass),
     };
    

    //check ==>adminObjectData===>sever
    if (
      this.state.AdminData.Name == this.state.txtuser &&
      this.state.AdminData.Pass == parseInt(this.state.txtpass)
    ) {
      this.setState({
       LogInUser: true,
      });
    }
    //redirect to AppRouter ==>Admin
  };
  render() {
    if (!this.state.LogInUser) {
      return (
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">

           <h1 class="row h-100 justify-content-center align-items-center">Login</h1>
           <div className="card" style={{width: "30rem"}}>

            <form onSubmit={this.onSubMitHandler}>
              <span>userName</span>
              <input
                className="form form-control"
                type="text"
                value={this.state.txtuser}
                name="txtuser"
                onChange={this.handlerInput}
              />
              <span>Password</span>
              <input
                type="text"
                className="form form-control"
                value={this.state.txtpass}
                name="txtpass"
                onChange={this.handlerInput}
              />
              <input type={"submit"} value="LogIn" className="btn btn-primary" />
            </form>
           </div>

        </div>
   </div>
  
      );
    } else {
      return <AppRouter Logout={this.onLogout}/>;
    }
  }
}

export default Login;
