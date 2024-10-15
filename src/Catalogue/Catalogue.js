import React, { useContext } from "react";
import ReactDOM from "react-dom";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import { CoursesContext } from "../Context/CoursesContext";

import CatalogueHome from "./CatalogueHome";
import Card from "./Card";

function Catalogue() {
  const { currentCourses, currentTopic } = useContext(CoursesContext);
  return (
    <div>
      {currentTopic && (
        <div className="catalogue-header">
          <div className="sort-container">
            <FormControl className="select">
              <InputLabel className="select-label" htmlFor="sort">
                Sort
              </InputLabel>
              <Select
                value={"A - Z"}
                color="primary"
                onChange={""}
                className="sort-select"
                inputProps={{
                  name: "sort",
                  id: "sort"
                }}
              >
                <MenuItem value={10}>A - Z</MenuItem>
                <MenuItem value={10}>CPD Points</MenuItem>
                <MenuItem value={20}>Popular</MenuItem>
                <MenuItem value={30}>New</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      )}

      <div className="cards-container">
        {currentCourses ? (
          currentCourses.map(course => {
            return <Card key={course.id} course={course} />;
          })
        ) : (
          <CatalogueHome />
        )}
      </div>
    </div>
  );
}

export default Catalogue;

/*
  {currentCourses.map(course => {
            return <Card key={course.id} course={course} />
          )}*/
