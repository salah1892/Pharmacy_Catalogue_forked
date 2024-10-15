import React from "react";

import CoursesContextProvider from "./Context/CoursesContext";
import NavContextProvider from "./Context/NavContext";
import EnrolmentsContextProvider from "./Context/EnrolmentsContext";

import { BrowserRouter } from "react-router-dom";

import Main from "./Main";

function App() {
  return (
    <div className="App">
      <CoursesContextProvider>
        <EnrolmentsContextProvider>
          <NavContextProvider>
            <BrowserRouter>
              <Main />
            </BrowserRouter>
          </NavContextProvider>
        </EnrolmentsContextProvider>
      </CoursesContextProvider>
    </div>
  );
}

export default App;
