
import TopNavBar from "./component/TopNavBar.tsx";
import TopNavIcon from "./component/TopNavIcon.tsx";
import {Container} from "react-bootstrap";
import FilterForm from "./component/FilterForm.tsx";
import ResultTable from "./component/ResultTable.tsx";
import mockData from "./response.json";
import type {GetAllProductDto} from "../../../data/product/type.ts";
import {useEffect, useState} from "react";

export default function LandingPage(){
  const[getAllProductDto, setGetAllProductDto] = useState<GetAllProductDto | undefined>(mockData);
  const [isLoading, setIsLoading] = useState(true);
  const [weaponTypeFilter, setWeaponTypeFilter] = useState("fighterJet");

  const handleWeaponTypeFilterChange = (weaponType: string) => {
    setWeaponTypeFilter(weaponType)
  }

  useEffect(() => {
    setGetAllProductDto(mockData);
  }, []

  )

  return(

   <>
     <TopNavIcon/>
     <TopNavBar/>
     <Container>
       <FilterForm/>
     </Container>
     /*  might be undefined */
     {
       getAllProductDto &&
     <ResultTable getAllProductDto={getAllProductDto}/>
     }
   </>
 )

}