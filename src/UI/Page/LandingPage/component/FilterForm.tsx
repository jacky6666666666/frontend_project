import {Col, Form, Row} from "react-bootstrap";

type Props = {
  weaponTypeFilter: string;
  handleWeaponTypeFilterChange: (weaponType: string) => void;
}

export default function FilterForm(
  {weaponTypeFilter,
    handleWeaponTypeFilterChange}: Props)
  {
  return(
    <Form className="my-3 p-3 border border-danger rounded">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
         Search Item
        </Form.Label>
        <Col sm="10">
          <Form.Select
            value={weaponTypeFilter}
            onChange={(event) => {
              handleWeaponTypeFilterChange(event.target.value)
            }}

          >
            <option value = "fighterJet">Fighter Jet  </option>
            <option value = "bomber">Strategic Bomber </option>
            <option value = "drone">Drone              </option>

          {/*
          <Form.Control
            type="text" value={weaponTypeFilter} onChange={(event) => {handleWeaponTypeFilterChange(event.target.value);
            }}
          />
          */}

          { /*
          <Form.Control type="text" placeholder=" Let's have a look in our arsenal!!!" />
        */}
        </Form.Select>
        </Col>
      </Form.Group>

    </Form>

  )

}