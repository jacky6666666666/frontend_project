import getProductDetailDto from "../response.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import QuantitySelector from "../../../component/QuantitySelector";
import {useContext, useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "@tanstack/react-router";
import * as ProductApi from "../../../api/ProductApi.ts"
import {ProductDetailDto} from "../../../../data/product/type.ts";
import LoadingContainer from "../../../component/LoadingContainer";
import {putCartItem} from "../../../api/CartItem.ts";
import {LoginUserContext} from "../../../../context/loginUserContext.ts";


export default function ProductDetailContainer(){
  const loginUser = useContext(LoginUserContext);

  const {productId} = useParams({from:"/product/$productId"});
  const location = useLocation();

  const [quantity, setQuantity] = useState<number>(1)

  const [getProductDetailDto, setProductDetailDto] = useState<ProductDetailDto | undefined>(undefined);

  const navigate = useNavigate({from: "/product/$productId"});

  const [isAddingCart, setIsAddingCart] = useState(false);

  const [isSuccessAddedCart, setIsSuccessAddedCart] = useState(false);

  const quantityMinusOne = () => {
    if (quantity>0){
      setQuantity(quantity-1);
    }
  }

  const quantityPlusOne = () => {
    if (quantity < getProductDetailDto.stock){
      setQuantity(quantity+1);
    }
  }

  const getProductByPid= async ()=> {
    try {
      const responseData = await ProductApi.getProductByPid(productId);
      setProductDetailDto(responseData);
    } catch (error){
      navigate({to: "/error"});

    }

  }


  useEffect(() => {
    getProductByPid();
  }, [])

  const handleAddToCart = async () => {
    if (loginUser === null){
      navigate({to: "/login"})
    } else if (loginUser){
      try {
        setIsAddingCart(true);
        await putCartItem(productId, quantity);
        setIsAddingCart(false);
        setIsSuccessAddedCart(true);
        setTimeout(() => {setIsSuccessAddedCart(false)}, 2000 )

      } catch {
        navigate({to: "/error"});
      }


    }



  }


  if(!getProductDetailDto){
    return <LoadingContainer/>
  }



  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src ={getProductDetailDto.imageUrl}/>
      <Card.Body>
        <Card.Title>{getProductDetailDto.name}</Card.Title>
        <Card.Text>
          {getProductDetailDto.description}
        </Card.Text>
        <label>
          {getProductDetailDto.price}
        </label>
        <label>
          {getProductDetailDto.stock}
        </label>
        <QuantitySelector
        quantity = {quantity}
        quantityMinusOne={quantityMinusOne}
        quantityPlusOne={quantityPlusOne}

        />

        {
          isSuccessAddedCart
          ?(
            <Button
              variant="success"
              disabled
              onClick={handleAddToCart}> Added ! </Button>
            ) : (
              <Button variant="primary"
                      disabled={isAddingCart}
                      onClick={handleAddToCart}
              >Add To Cart !</Button>

            )
        }

      </Card.Body>
    </Card>
  );




}