import React from 'react';
import './Graphs.css';
import { GoGitCompare } from "react-icons/go";
import { TbTimelineEventMinus } from "react-icons/tb";
import TimeTaken from './TimeTaken';
import CompareAccuracy from './CompareAccuracy';

function GraphContainer () {
  return (
    <div className="graph-container">
      {/* Compare Accuracy */}
      <div className="card graph-card">
        <h3> <GoGitCompare /> Compare Accuracy</h3>
        <div className="graph-placeholder">
            <CompareAccuracy/>
        </div>
      </div>
    
      
      {/* Time Taken */}
      <div className="card graph-card">
        <h3> <TbTimelineEventMinus /> Time Taken</h3>
        <div className="graph-placeholder">
        <div className="App">
         <TimeTaken maxTime={90} currentTime={30} greenTime={20} redTime={70} />
         <TimeTaken maxTime={4} currentTime={1.5} greenTime={2} redTime={2} />
        </div>
      </div>      
      </div>
    </div>
  );
};

export default GraphContainer;
