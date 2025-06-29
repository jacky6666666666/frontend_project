import {Table} from "react-bootstrap";
import ResultTableRow from "./ResultTableRow.tsx";
import type {GetAllProductDto} from "../../../../data/product/type.ts";
import {useEffect, useState} from "react";
import mockData from "../response.json";

type Props = {
  getAllProductDto: GetAllProductDto
  weaponType: string
}


export default function ResultTable({getAllProductDto}: Props){
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[]>(mockData);

  useEffect(() => {

  }, []);


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