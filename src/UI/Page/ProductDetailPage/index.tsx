import {useLocation, useParams} from "@tanstack/react-router";
import ProductDetailContainer from "./component/ProductDetailContainer.tsx";

export default function ProductDetailPage(){
  const {productId, userId} = useParams({from:"/product/$product"});
  const location = useLocation();

  return(
    <>
      <ProductDetailContainer/>

    </>


  )








}