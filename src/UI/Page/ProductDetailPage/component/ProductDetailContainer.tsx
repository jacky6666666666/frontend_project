import mockData from "../response.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import QuantitySelector from "../../../component/QuantitySelector";
import {useState} from "react";


export default function ProductDetailContainer(){
  const [quantity, setQuantity] = useState<number>(1)

  const quantityMinusOne = () => {
    if (quantity>0){
      setQuantity(quantity-1);
    }
  }

  const quantityPlusOne = () => {
    if (quantity < mockData.stock){
      setQuantity(quantity+1);
    }
  }


  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src ={mockData.imageUrl}/>
      <Card.Body>
        <Card.Title>{mockData.name}</Card.Title>
        <Card.Text>
          {mockData.description}
        </Card.Text>
        <label>
          {mockData.price}
        </label>
        <label>
          {mockData.stock}
        </label>
        <QuantitySelector
        quantity={mockData.stock}
        quantityMinusOne={quantityMinusOne}
        quantityPlusOne={quantityPlusOne}

        />
        <Button variant="primary">Add To Cart !</Button>
      </Card.Body>
    </Card>
  );




}