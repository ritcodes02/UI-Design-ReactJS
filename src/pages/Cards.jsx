import React from 'react'
import { CiSquareChevDown } from "react-icons/ci";
import "./Cards.css"

function Cards() {
  return (
    <div className="cards-container">
        <div className="cards">
        <CiSquareChevDown className='down' />
        <p> Compare Accuracy</p>
        </div>
    </div>
  )
}

export default Cards