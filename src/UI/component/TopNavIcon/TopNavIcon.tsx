import {Container, Navbar} from "react-bootstrap";

export default function TopNavIcon(){
  return(
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://img.freepik.com/premium-photo/fierce-fighter-jet-action-stunning-photo-military-aircraft-flying-city_734790-1157.jpg"
              width="200"
              height="100"
              className="d-inline-block align-top"
            />{"  Welcome to JK's Weapon House"}

          </Navbar.Brand>
        </Container>
      </Navbar>
    </>

  )

}