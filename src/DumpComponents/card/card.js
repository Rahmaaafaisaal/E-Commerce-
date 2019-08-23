import React from 'react';
import ButtonWithModal from '../ButtonWithModal/ButtonWithModal'
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import './card.css'


let CardItem = (props) => {
  let key=0;
  return (
    props.products.map(product=>{
      
           key+=1;
      return ( <div key={key} className="cardDiv">
      <Card>
       
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>{product.price} L.E</CardSubtitle>
          <CardText>this is a test product</CardText>
          <ButtonWithModal  product={product} name={product.name} buttonLabel="Get It Now"> </ButtonWithModal>
        </CardBody>
      </Card>
    </div>)
  })
  );
};

export default CardItem;


