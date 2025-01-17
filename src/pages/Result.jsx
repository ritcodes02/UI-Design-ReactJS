import React from "react";
import "./Result.css";
import YourResult from "../assets/youresult.svg" 
import { IoBagCheckOutline } from "react-icons/io5";
import profile from "../assets/profile (1).png"
import { VscFileSymlinkFile } from "react-icons/vsc";
import { ImNotification } from "react-icons/im";

function Result() {
  return (
    <div className="result">
      <div className="result-card">
        <img src={YourResult}/>
        <h2>Your Result!</h2>
        <p>All your insights & details in one place</p>
        <div className="score">
          <div className="score01">
            <div className="bag-shadow">
             <IoBagCheckOutline className="bag"/>
            </div>
             <p>YOU'VE PASSED</p>
            <h1><span>136</span> / 240</h1>
            <div className="column"></div>
            <h3>76% </h3>
            <h6>ACCURACY</h6> 
          </div>
           <div className="score02">
            <img src={profile}/>
            <p>Top Score</p>
            <h1><span>230</span> / 240</h1>
            <div className="row"></div>
            <h2><span>By</span> Parth Akotkar</h2>
            <h3>92% ACCURACY</h3>
          </div> 
          <h4>Improve your Marks</h4>
          <h5>Improve your score by practice more</h5>
          <button>Practice more</button>
        </div>
        <div className="revisit">
          <h3>Revisit Paper</h3>
          <p>Challenge your friends by simply</p>
          <p> sharing a link to this test</p>
          <button><VscFileSymlinkFile />Visit</button>         
          <h6><ImNotification />instruction for how to upload your handwrite material in given</h6>
        </div>
      </div>
    </div>
  );
}

export default Result;
