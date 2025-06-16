import {Col, Form, Row} from "react-bootstrap";

export default function FilterForm(){
  return(
    <Form className="my-3 p-3 border border-danger rounded">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
         Search Item
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder=" Let's have a look in our arsenal!!!" />
        </Col>
      </Form.Group>

    </Form>

  )

}