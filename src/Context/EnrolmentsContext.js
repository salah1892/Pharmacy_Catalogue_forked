import React, { createContext, useState, useEffect } from "react";
import database from "../firebase/firebase";

export const EnrolmentsContext = createContext();

const EnrolmentsContextProvider = props => {
  const [enrolments, setEnrolments] = useState("");

  useEffect(() => {
    let enrolmentsList = [];

    database.collection("enrolments").onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        enrolmentsList.push({
          id: doc.id,
          title: doc.data().title,
          topic: doc.data().topic,
          type: doc.data().type,
          points: doc.data().points,
          group: doc.data().group,
          competencies: doc.data().competencies,
          start_date: doc.data().start_date,
          end_date: doc.data().end_date,
          provider: doc.data().provider,
          accredited: doc.data().accredited,
          reflections: doc.data().reflections
        });
      });
      setEnrolments(enrolmentsList);
      enrolmentsList = [];
    });
  }, []);

  function addEnrolment(course) {
    database.collection("enrolments").add({
      id: course.course.id,
      title: course.course.title,
      topic: course.course.topic,
      type: course.course.format,
      points: course.course.points,
      group: "2",
      competencies: "1.1, 1.2, 2.1",
      start_date: "TBC",
      end_date: "TBC",
      provider: "PSA",
      accredited: "Yes",
      reflections: "reflection..."
    });
  }

  function deleteEnrolment(id) {
    console.log(id);
  }

  return (
    <EnrolmentsContext.Provider
      value={{
        enrolments,
        addEnrolment,
        deleteEnrolment
      }}
    >
      {props.children}
    </EnrolmentsContext.Provider>
  );
};

export default EnrolmentsContextProvider;
