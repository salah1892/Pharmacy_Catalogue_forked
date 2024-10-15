import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CoursesContext = createContext();

const CoursesContextProvider = props => {
  const [courses, setCourses] = useState("");
  const [currentCourses, setCurrentCourses] = useState("");
  const [topics, setTopics] = useState([]);
  const [types, setTypes] = useState([]);
  const [currentTopic, setCurrentTopic] = useState("");
  const [isCatalogue, setIsCatalogue] = useState(true);

  function createTopics(courses) {
    let topics = [];
    courses.map(course => {
      if (topics.includes(course.topic)) {
      } else {
        topics.push(course.topic);
      }
    });
    // let topics2 = topics.splice(0, 1);
    setTopics(topics);
    topics = [];
  }

  function createTypes(courses) {
    /*let types = [];
    courses.map(course => {
      if (types.includes(course.format)) {
      } else {
        types.push(course.format);
      }
    });
    setTypes(types);
    types = [];*/
    let types = [
      "Annual Gold Questionnaire",
      "Australian Journal of Pharmacy",
      "Australian Pharmacist",
      "Essential CPE",
      "Qualification",
      "Short course",
      "Blended learning",
      "Conference",
      "Face-to-face",
      "Online module",
      "Podcast",
      "Recorded session",
      "Webinar"
    ];
    setTypes(types);
  }

  function changeTopic(topic) {
    setCurrentTopic(topic);
    let matchingCourses = [];
    courses.forEach(course => {
      if (course.topic === topic) {
        matchingCourses.push(course);
      }
    });
    setCurrentCourses(matchingCourses);
    matchingCourses = [];
  }

  useEffect(() => {
    axios
      .get(
        "https://uploads.codesandbox.io/uploads/user/8a417780-8023-4699-9b74-daeb9947f95b/Ujb2-cpd.json"
      )
      .then(response => {
        let coursesList = [];
        for (var i = 0; i < response.data.length; i++) {
          coursesList.push({
            id: response.data[i].id,
            title: response.data[i].Title,
            topic: response.data[i].Topic,
            points: response.data[i].Points,
            format: response.data[i].Format
          });
        }
        setCourses(coursesList);
        createTopics(coursesList);
        createTypes(coursesList);
        coursesList = [];
      });
  }, []);

  return (
    <CoursesContext.Provider
      value={{
        courses,
        topics,
        types,
        currentTopic,
        changeTopic,
        currentCourses,
        isCatalogue
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
