import {Table} from "react-bootstrap";
import ResultTableRow from "./ResultTableRow.tsx";
import type {GetAllProductDto} from "../../../../data/product/type.ts";
import {useEffect, useState} from "react";
import mockData from "../response.json";
import {useNavigate} from "@tanstack/react-router";
import * as ProductApi from "../../../api/ProductApi.ts";
import LoadingContainer from "../../../component/LoadingContainer";


type Props = {
  getAllProductDto: GetAllProductDto
  weaponType: string
}


export default function ResultTable({getAllProductDto}: Props){
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | undefined>(undefined);

  const navigate = useNavigate({from:"/"})

  const getAllProduct1 = async () => {
    try {
      const responseData = await ProductApi.getAllProduct();
      setGetAllProductDtoList(responseData);

    } catch {
        navigate({to: "/error"})

    }


  }

  useEffect(() => {
     getAllProduct1()
  }, [] );


  if(!getAllProductDtoList){
    return <LoadingContainer/>
  }




  return(
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Pid</th>
        <th>Image</th>
        <th>Name</th>
        <th>hasStock</th>
        <th>price</th>

      </tr>
      </thead>
      <tbody>

        {/*
        .filter((result)=> (
          result.weaponType.includes(weaponType)
        )) */}
        {
        getAllProductDtoList.map( (dto) => (
      <ResultTableRow getAllProductDto={dto}/> ))
      }
      </tbody>
    </Table>

  )

}