import React from "react";
import "./TimeTaken.css";


function TimeTaken  ({ maxTime, currentTime, greenTime, redTime }) {

  const pointerPosition = (currentTime / maxTime) * 100;

  return (
    <div className="ruler-container">
      <div className="ruler-scale">
        <div className="scale">
          {[...Array(11)].map((_, index) => (
            <div key={index} className="tick">
              <span className="tick-label">{(index * maxTime) / 10}s</span>
            </div>
          ))}
        </div>
        <div className="progress-bar">
          <div
            className="bar green"
            style={{ width: `${(greenTime / maxTime) * 100}%` }}
          ></div>
          <div
            className="bar red"
            style={{ width: `${(redTime / maxTime) * 100}%` }}
          ></div>
        </div>
        <div
          className="pointer"
          style={{ left: `${pointerPosition}%` }}
        ></div>
      </div>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum
      </p>
    </div>
  );
};

export default TimeTaken;

