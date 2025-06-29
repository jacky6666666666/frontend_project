import { createRootRoute, Link, Outlet} from '@tanstack/react-router'
import ProductDetailPage from "../UI/Page/ProductDetailPage";
import LandingPage from "../UI/Page/LandingPage";

export const Route = createRootRoute({
  component:LandingPage,
})