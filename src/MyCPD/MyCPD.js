import React, { useContext } from "react";

import { EnrolmentsContext } from "../Context/EnrolmentsContext";

import CPDCard from "./CPDCard";

function MyCPD() {
  const { enrolments } = useContext(EnrolmentsContext);
  return (
    <div className="cards-container">
      {enrolments &&
        enrolments.map(course => {
          return <CPDCard key={course.id} course={course} />;
        })}
    </div>
  );
}

export default MyCPD;
