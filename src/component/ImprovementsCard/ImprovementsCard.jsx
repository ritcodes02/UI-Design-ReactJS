import React from 'react';
import './ImprovementsCard.css';
import { TbStairsUp } from "react-icons/tb";

function ImprovementsCard  () {
  return (
    <div className="card improvements-card">
      <h3> <TbStairsUp /> Improvements</h3>
      <h4>Subject Understanding</h4>
      <div className="tags">
       <p className='sub1'>Geography</p>
       <p className='sub2'>Politics</p>
       <p className='sub3'>Current Affairs</p>
       <p className='sub4'>General Studies</p>
       <p className='sub5'>Mathematics</p>
       <p className='sub6'>Social Studies</p> 
       <p className='sub7'>English Literature</p> 
       <p className='sub8'>Indian History</p> 
       <p className='sub9'>Economics</p> 
        
      </div>
    </div>
  );
};

export default ImprovementsCard;
