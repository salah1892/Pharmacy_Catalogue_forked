import React, { useContext } from "react";

import { CoursesContext } from "../Context/CoursesContext";

import Card from "./Card";

function CatalogueHome() {
  const { courses } = useContext(CoursesContext);
  const featuredCourses = [];
  for (let i = 0; i < 3; i++) {
    featuredCourses.push(courses[Math.floor(Math.random() * 2000)]);
  }
  const popularCourses = [];
  for (let i = 0; i < 3; i++) {
    popularCourses.push(courses[Math.floor(Math.random() * 2000)]);
  }
  return (
    <div>
      <h1>Featured</h1>
      <div className="cards-container">
        {courses &&
          featuredCourses.map(course => {
            return <Card key={course.id} course={course} />;
          })}
      </div>
      <h1>Popular</h1>
      <div className="cards-container">
        {courses &&
          popularCourses.map(course => {
            return <Card key={course.id} course={course} />;
          })}
      </div>
    </div>
  );
}

export default CatalogueHome;
