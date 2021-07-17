import React from "react";
import './FilmComponent.css'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'

export default function FilmComponent(props) {
  return (
    <div className="Film">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          <strong>Release Date :</strong> {props.release_date}
          </Card.Subtitle>
          <Card.Text>
            {props.opening}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <strong>Character :</strong>
              {props.character.map((val) => { if (val.id === props.id) { return <ul><li>{val.datas.name}</li></ul> } })}
            </ListGroupItem>
            <ListGroupItem><strong>Producer : </strong>{props.producer}</ListGroupItem>
            <ListGroupItem><strong>Director : </strong>{props.director}</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
