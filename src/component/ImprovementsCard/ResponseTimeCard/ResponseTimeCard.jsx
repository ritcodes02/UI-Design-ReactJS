import React from 'react';
import './ResponseTimeCard.css';
import { TbClockExclamation } from "react-icons/tb";
import { FaArrowUpLong } from "react-icons/fa6";

function ResponseTimeCard  ()  {
  return (
    <div className="card response-time-card">
      <h3> <TbClockExclamation /> Response Time</h3>
      <div className="response-time">
        <p>Std Time-2m</p>
      </div>
      <h5><span className='percent'>60</span>% Ans took <span><FaArrowUpLong /></span>
        <span className='min'> 2min</span></h5>
        <h6>You are <span className='slow'>slow</span>!</h6>
    </div>
  );
};

export default ResponseTimeCard;
