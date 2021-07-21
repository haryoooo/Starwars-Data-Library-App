import React from 'react'
import './HeaderComponent.css'
import logo from '../assets/640px-Star_Wars_Logo.svg.png'

export default function HeaderComponent() {
    return (
        <div className="Header">
            <img src={logo} alt="starwars-logo"></img>
        </div>
    )
}
