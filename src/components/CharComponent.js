import React, { useState } from "react";
// import logo from '../assets/star-wars-backgrounds.jpg'
import "./CharComponent.css";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

export default function CharComponent(props) {
  return (
    <div className="Characters">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <strong>Birth Year :</strong> {props.birth_year}
          </Card.Subtitle>
          <Card.Text>
            <strong>Films :</strong>
            {props.films.map((value) => {
              if (props.id === value.id) {
                return (
                  <div>
                    <ul>
                      <li>{value.datas.title}</li>
                    </ul>
                  </div>
                );
              }
            })}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <strong>Gender :</strong> {props.gender}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Eye Color :</strong> {props.eye_color}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Hair Color :</strong> {props.hair_color}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Height : </strong>
              {props.height} cm
            </ListGroupItem>
            <ListGroupItem>
              <strong>Weight : </strong>
              {props.weight} kg
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
