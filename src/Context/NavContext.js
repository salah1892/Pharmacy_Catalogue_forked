import React, { createContext, useState, useEffect } from "react";

export const NavContext = createContext();

const NavContextProvider = props => {
  const [isCatalogue, setIsCatalogue] = useState(false);

  function changeIsCatalogue(type) {
    if (type === "cpd") {
      setIsCatalogue(false);
    }
    if (type === "catalogue") {
      setIsCatalogue(true);
    }
  }

  return (
    <NavContext.Provider
      value={{
        isCatalogue,
        changeIsCatalogue
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
