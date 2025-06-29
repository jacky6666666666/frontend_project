import {Button, Stack} from "react-bootstrap";

type Props = {quantity: number
  quantityMinusOne: () => void;
  quantityPlusOne: () => void;
}

export default function QuantitySelector({quantity, quantityMinusOne, quantityPlusOne}: Props){



  return(
    <Stack direction="horizontal" gap={9}>
      <Button
        variant="danger"
        onClick={quantityMinusOne}
      >
        - </Button>
      <button> {quantity} </button>
      <Button
        variant="success"
        onClick={quantityPlusOne}
      >
        + </Button>
    </Stack>



  )
}