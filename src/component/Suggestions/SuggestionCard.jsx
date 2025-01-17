import React from 'react'
import "./Suggestion.css"
import { BsStars } from "react-icons/bs";

function SuggestionCard () {
  return (
    <div className="card Suggestion-card">
            <h3> <BsStars /> Suggestions</h3>
        <div className="blue-box">
            <p>Q. 1-12</p>
            <p>Q. 12-32</p>
            <p>Q. 32-40</p>
        </div>
        <div className="dash-box">
            <h2>40 <span>sec</span></h2>
            <h2>1.5 <span>min</span></h2>
            <h2>3 <span>min</span></h2>
        </div>
        <div className="stage">
           <p className='easy'>Easy</p>
           <p className='medium'>Medium</p>
           <p className='hard'>Hard</p>
        </div>
    </div>
  )
}

export default SuggestionCard