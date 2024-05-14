import React, { createContext, useState, useContext } from 'react';

// Create a context
  export const MyContext = createContext();
 export const MyProvider = ({ children }) => {
    const [state, setState] = useState('default value');
  
    return (
      <MyContext.Provider value={{ state, setState }}>
        {children}
      </MyContext.Provider>
    );
  };
  