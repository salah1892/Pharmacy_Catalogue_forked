import React, { useState, useContext } from "react";
import Dialog from "@material-ui/core/Dialog";

import { EnrolmentsContext } from "../Context/EnrolmentsContext";
import { NavContext } from "../Context/NavContext";

import { Link } from "react-router-dom";

function SimpleDialog(props) {
  const { changeIsCatalogue } = React.useContext(NavContext);
  const { onClose, selectedValue, ...other } = props;
  function handleClose() {
    onClose(selectedValue);
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      {...other}
    >
      <div className="modal-container">
        <div className="modal-title">You are now enrolled! </div>
        <div className="modal-info">
          The CPD has been added to your{" "}
          <Link to="/" onClick={() => changeIsCatalogue("cpd")}>
            My CPD
          </Link>
        </div>
        <div className="modal-info-open">
          <u>Open the course</u>
        </div>
      </div>
    </Dialog>
  );
}

const Card = props => {
  const [open, setOpen] = React.useState(false);
  const { addEnrolment } = React.useContext(EnrolmentsContext);

  function handleClickOpen() {
    setOpen(true);
    addEnrolment(props);
  }

  const handleClose = value => {
    setOpen(false);
  };
  return (
    <div className="card-container">
      <div className="card-top">
        <div className="card-title"> {props.course.title}</div>

        <div className="card-cpd-points">
          <span className="points"> {props.course.points} </span>
          <span> CPD points (Group 2)</span>
        </div>
        <div className="card-cpd-format">
          <span> Topic: {props.course.topic}</span>
        </div>
        <div className="card-cpd-format">
          <span> Type: {props.course.format}</span>
        </div>
        <div className="card-cpd-format">
          <span> Competencies: 2.1, 3.1, 3.2, 4.2</span>
        </div>
      </div>

      <div className="card-bottom">
        <div className="card-button" onClick={handleClickOpen}>
          Enrol
        </div>
        <SimpleDialog open={open} onClose={handleClose} />
      </div>
    </div>
  );
};

export default Card;
