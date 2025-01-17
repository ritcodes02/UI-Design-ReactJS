import React from 'react';
import './ApproachDataCard.css';
import { TbStairsUp } from "react-icons/tb";


function ApproachDataCard  () {
  return (
    <div className="card approach-data-card">
      <h3> <TbStairsUp /> Approach Data</h3>
      <ul>
        <li><span>25<span className='percent'>%</span></span> Based on <span className='color'>Facts</span></li>
        <li><span>32<span className='percent'>%</span></span> Based on <span className='color'>Analysis</span></li>
        <li><span>19<span className='percent'>%</span></span>Based on <span className='color'>Elimination</span></li>
        <li><span>24<span className='percent'>%</span></span>Based on <span className='color'>Guess</span></li>
      </ul>
    </div>
  );
};

export default ApproachDataCard;
