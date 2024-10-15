import React, { useState, useContext } from "react";
import { EnrolmentsContext } from "../Context/EnrolmentsContext";

const CPDCard = props => {
  const { deleteEnrolment } = useContext(EnrolmentsContext);
  const randomNumber = 0;
  return (
    <div className="cpd-card-container">
      <div className="card-top">
        <div className="card-title"> {props.course.title}</div>

        <div className="card-cpd-points">
          <span className="points"> {props.course.points} </span>
          <span> CPD points (Group 2)</span>
        </div>
        <div className="card-cpd-format">
          <span> {props.course.type}</span>
        </div>
      </div>
      <div className="cpd-card-bottom">
        <div className="progress-bar-container">
          <div className="progress-bar-text">Progress:</div>
          <progress max="100" value={randomNumber}>
            <strong>Skill Level: 50%</strong>
          </progress>
        </div>
      </div>
    </div>
  );
};

export default CPDCard;
