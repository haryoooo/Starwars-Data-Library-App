import { Button } from "react-bootstrap";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import "./Homepage.css";

export default function Homepage() {
  const [text, setText] = useState("Welcome to starwars data library");

  return (
    <div className="Homepage">
      <HeaderComponent />
      <div className="Buttons">
        <Button
          size="lg"
          variant="outline-warning"
          onMouseOver={() => setText("Click navigation bar to find the data")}
          onMouseLeave={() => setText("Welcome to starwars data library")}
          className="Button"
        >
          <strong>{text}</strong>
        </Button>
      </div>
    </div>
  );
}
