import {Nav} from "react-bootstrap";


export default function TopNavBar(){
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}

    >
      <Nav.Item>
        <Nav.Link href="/home">Home Page</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Login</Nav.Link>
      </Nav.Item>


    </Nav>

  )

}