import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="Homepage">
      <HeaderComponent />
      <div className="HeaderText">Welcome to starwars data library</div>
    </div>
  );
}
