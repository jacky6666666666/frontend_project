
import TopNavBar from "./component/TopNavBar.tsx";
import TopNavIcon from "./component/TopNavIcon.tsx";
import {Container} from "react-bootstrap";
import FilterForm from "./component/FilterForm.tsx";
import ResultTable from "./component/ResultTable.tsx";

export default function LandingPage(){
 return(

   <>
     <TopNavIcon/>
     <TopNavBar/>
     <Container>
       <FilterForm/>
     </Container>
     <ResultTable/>
   </>
 )

}