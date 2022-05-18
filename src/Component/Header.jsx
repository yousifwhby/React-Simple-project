import { Link } from "react-router-dom";
let Header =(props)=>{
  console.log("🚀 ~ file: Header.jsx ~ line 3 ~ Header ~ props", props)
  return (
      
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to={'/Add'}>Add</Link>

         </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>  */}
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <Link class="nav-link active btn btn-danger" aria-current="page" onClick={()=>props.Logout} to={'/Login'}>Logout</Link> */}
        <input type="button" value="Logout" onClick={()=>props.Logout()}class="nav-link active btn btn-danger"/>
        

      {/* </form> */} 
    </div>
  </div>
</nav>

    );
}
export default Header;