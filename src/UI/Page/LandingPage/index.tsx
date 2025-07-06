
import TopNavBar from "../../component/TopNavBar/TopNavBar.tsx";
import TopNavIcon from "../../component/TopNavIcon/TopNavIcon.tsx";
import {Container} from "react-bootstrap";
import FilterForm from "./component/FilterForm.tsx";
import ResultTable from "./component/ResultTable.tsx";
import mockData from "./response.json";
import type {GetAllProductDto} from "../../../data/product/type.ts";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "@tanstack/react-router";
import * as ProductApi from "../../../UI/api/ProductApi.ts";
import {getAllProduct} from "../../../UI/api/ProductApi.ts";

export default function LandingPage(){


  const[getAllProductDto, setGetAllProductDto] = useState<GetAllProductDto[] | undefined>(undefined);




  const [isLoading, setIsLoading] = useState(true);
  const [weaponTypeFilter, setWeaponTypeFilter] = useState("fighterJet");

  const handleWeaponTypeFilterChange = (weaponType: string) => {
    setWeaponTypeFilter(weaponType)
  }


  useEffect(() => {
   setGetAllProductDto(ProductApi.getAllProduct);
  }, []

  )

  return(

   <>
     <TopNavIcon/>
     <TopNavBar/>
     <Container>
       <FilterForm weaponTypeFilter={weaponTypeFilter} handleWeaponTypeFilterChange={handleWeaponTypeFilterChange}/>
     </Container>

     {
       getAllProductDto &&
     <ResultTable getAllProductDto={getAllProductDto}/>
     }
   </>
 )

}