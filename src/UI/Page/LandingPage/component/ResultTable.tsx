import {Table} from "react-bootstrap";
import ResultTableRow from "./ResultTableRow.tsx";

export default function ResultTable(){
  return(
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Pid</th>
        <th>Image</th>
        <th>Name</th>
        <th>HasStork</th>
        <th>Price</th>

      </tr>
      </thead>
      <tbody>
      <ResultTableRow/>
      </tbody>
    </Table>

  )

}