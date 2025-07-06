import type {GetAllProductDto} from "../../../../data/product/type.ts";
import {Button} from "react-bootstrap";
import {Link} from "@tanstack/react-router";


type Props = {
  getAllProductDto: GetAllProductDto
}


/*
export default function checkStock({getAllProductDto}: Props): string {
  let stockStatus: string;
  if (getAllProductDto.hasStock){
    stockStatus = "in stock"
    return stockStatus;
  } else {
    stockStatus = "currently out of stock"
    return stockStatus;
  }
}

 */



export default function ResultTableRow({getAllProductDto}: Props){
  const renderProductImage = () => {
    let imageUrl_error: string;

    if(!getAllProductDto.imageUrl){
      imageUrl_error = "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg";
    } else if(getAllProductDto.imageUrl){
      imageUrl_error = getAllProductDto.imageUrl;
    } else {
      imageUrl_error = "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg";
    }

    return (
      <img width={190} src = {imageUrl_error}/>
    )
  }



  return(
    <tr>
      <td>{getAllProductDto.pid}</td>
      <td>
        {renderProductImage()}
      </td>
      <td>{getAllProductDto.name}</td>
      <td>{getAllProductDto.hasStock? "has stock" : "out of stock"}</td>
      <td>
        {getAllProductDto.price}
      </td>
      <td>
        <Link
        to="/product/$productId"
        params={{productId: getAllProductDto.pid.toString(),}}

        >
        <Button variant="info">Check it out !</Button>
        </Link>
      </td>
    </tr>

  )
}