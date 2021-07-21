import React from 'react'
import './SearchHeaderComponent.css'

export default function SearchHeaderComponent(props){
    return (
        <div className="SearchHeader">
            <img src={props.header} alt="Search Header" />
        </div>
    )
}
