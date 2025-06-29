import {createFileRoute} from "@tanstack/react-router";
import LoginPage from "../UI/Page/LoginPage";

// add the /login beside the link can go to the login page
export const Route = createFileRoute('/login'){
  component: LoginPage
}