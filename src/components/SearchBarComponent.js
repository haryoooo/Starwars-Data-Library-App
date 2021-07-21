import React from "react";
import  { Form, FormControl } from 'react-bootstrap'
import './SearchBarComponent.css'

export default function SearchBarComponent(props){

  return (
    <div className="Search">
      <Form className="d-flex mr-3" >
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={props.filterByName}
        color="warning"
      />
      </Form>
    </div>
  );
}
