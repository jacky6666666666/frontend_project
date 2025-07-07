import {GetAllProductDto, ProductDetailDto} from "../../data/product/type.ts";
import axios from "axios";


const baseUrl = "http://localhost:8080";

export async function getAllProduct(){
  try {

    const response  = await axios.get<GetAllProductDto[]>(`${baseUrl}/public/product`)
    return response.data;

  } catch(error){
    console.error("Error fetching products:", error);
    throw error;
  }

}


export async function getProductByPid(pid: string){
  try {

    const response = await axios.get<ProductDetailDto>(`${baseUrl}/public/product/${pid}`)
    return response.data;

  } catch(error){
    console.error("Error fetching products:", error);
    throw error;
  }


}
