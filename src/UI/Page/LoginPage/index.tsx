import TopNavIcon from "../../component/TopNavIcon/TopNavIcon.tsx";
import TopNavBar from "../../component/TopNavBar/TopNavBar.tsx";
import {Alert, Button, Container, Form} from "react-bootstrap";
import {GoogleLoginButton} from "react-social-login-buttons";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts";
import {type FormEvent, useState} from "react";
import {useRouter} from "@tanstack/react-router";


export default function LoginPage(){
  const [isLoginFailed ,setIsLoginFailed] = useState(false);

  const router = useRouter();

  const handleSigninWithEmailAndPassword = async (event: FormEvent<HTMLFormElement>) => {
    // to prevent jumping to next page after clicking submit
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!

    console.log(email, password);

    const loginResult = await FirebaseAuthService.signInWithEmailAndPassword(email, password);
    console.log(loginResult);

    if(loginResult){
       router.history.back();

    } else {
      setIsLoginFailed(true);

    }


  }

  return(
    <>
    <TopNavIcon/>
    <TopNavBar/>


  <Container className="d-flex justify-content-center" >
    <div
      style ={{width: "720px"}}
      className="border rounded p-3"

    >
  <Form onSubmit={handleSigninWithEmailAndPassword}>

    {
      isLoginFailed &&

    <Alert variant = "danger">
      login unsuccessful
    </Alert>
    }

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="name@example.com" />
      </Form.Group>

    <Form.Group>
      <Form.Label >Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        aria-describedby="passwordHelpBlock"
      />
    </Form.Group>

      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
      <hr/>

    <Button variant="primary" type = "submit">
      Submit
    </Button>
    <hr/>
    <GoogleLoginButton onClick={() => alert("Hello")} />

  </Form>
      </div>
  </Container>




    </>
  );
}