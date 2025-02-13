// MyContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Custom hook for using the context
export const useMyContext = () => useContext(MyContext);

// Context Provider component
export const MyContextProvider = ({ children }) => {
  const [basename, setBasename] = useState('/');

  return (
    <MyContext.Provider value={{ basename, setBasename }}>
      {children}
    </MyContext.Provider>
  );
};
