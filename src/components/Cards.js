import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardData from "./CardData";
import { useDispatch } from "react-redux";
import {ADD} from '../redux/actions/action'

const Cards = () => {
  const [cardsData, setCardsData] = useState(CardData);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e))
  }
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Project</h2>
      <div className="row d-flex align-item-center justify-content-center">
        {cardsData.map((element, index) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "14rem" }}
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price: ₹{element.price}</Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button variant="primary col-lg-12" onClick={()=>send(element)}>Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Cards;
