import React, { useContext } from "react";
import { MyContext } from "./UseContext";

export const MyComponent = () => {
   
    const { state, setState } = useContext(MyContext);
  
    return (
      <div>
        <p>{state}</p>
        <button onClick={() => setState('new value')}>Change Value</button>
      </div>
    );
  };
  