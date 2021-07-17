import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import './Homepage.css'

export default function Homepage() {
    const [text, setText] = useState("Welcome to starwars data library")

    return (
        <div className="Homepage">
            <HeaderComponent />
            <div className="Buttons">
                <Button size="lg" variant="outline-warning" onMouseLeave={() => setText("Welcome to starwars data library")} onMouseOver={() => setText("Click on navbar to find data")}><strong>{text}</strong></Button>
            </div>
        </div>
    )
}
