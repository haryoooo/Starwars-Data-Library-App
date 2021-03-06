import React from "react";
import { Spinner } from "react-bootstrap";
import './CharDisplayComponent.css'
import CharComponent from "./CharComponent";

export default function CharDisplayComponent(props) {
  if (props.isLoading) {
    return (
      <div className="isLoading">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }

  return (
    <div>
      {(props.character.length === 0) ? (
        <div>
            <h1 className="EmptyHeader">Characters not found...</h1>
        </div>
      ) : (
      <div className="CharDisplay">
      {props.character.map((value, idx) => {
        return (
          <CharComponent
            key={idx}
            id={value.id}
            films={value.films}
            name={value.name}
            gender={value.gender}
            films={value.films}
            height={value.height}
            weight={value.mass}
            birth_year={value.birth_year}
            eye_color={value.eye_color}
            hair_color={value.hair_color}
          />
        );
      })}
      </div>
      )};
    </div>
  );
}
