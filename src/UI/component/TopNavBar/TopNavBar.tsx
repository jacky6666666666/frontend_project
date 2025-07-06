import {Button, Container, Nav} from "react-bootstrap";
import {Link} from "@tanstack/react-router";
import {useContext} from "react";
import {LoginUserContext} from "../../../context/loginUserContext.ts";
import LoadingContainer from "../LoadingContainer";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



export default function TopNavBar(){
  const loginUser = useContext(LoginUserContext);

  const handleLogout = async () => {
      await FirebaseAuthService.signOut();
  }

  const renderLoginContainer = () => {
    if(loginUser){
      return(
        <>
        <Button> <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /> </Button>
          <div className="text-white p-3" >{loginUser.email}</div>
          <Button onClick={handleLogout}
          > Logout </Button>
        </>

      )
    } else if (loginUser == undefined){
       return <LoadingContainer/>
    }
   else {

    return (
    <Button
      variant = "primary"
    >
      <Link to="/login" className= "text-white" style = {{textDecoration: "none"}} > Login  </Link>
    </Button>
    )
  }
}
return (
    <Nav className="bg-body-tertiary"  data-bs-theme="dark"

     /* {variant="pills" defaultActiveKey="/login"}  "navbar navbar-expand-lg navbar-light bg-light p-lg-1"   */

    >
      <Nav.Item>

        <Nav.Link eventKey="link-1">
          <Button>
          <Link to="/" className="text-white" style = {{textDecoration: "none"}}>Home Page</Link>
          </Button>

        </Nav.Link>

      </Nav.Item>

      <Nav.Item  className="d-flex justify-content-end"  >

        <Nav.Link href="/login" >


      </Nav.Link>

      </Nav.Item>



    </Nav>

  )

}