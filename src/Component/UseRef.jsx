import React, { useEffect, useRef } from 'react'

export const UseRef = () => {
    const inputRef = useRef(null);

    useEffect(() => {
      // Focus the input field when the component mounts
      inputRef.current.focus();
    }, []);
  
    const handleClick = () => {
      // Focus the input field when the button is clicked
      inputRef.current.focus();
    };
  return (
    <div>
      {/* Attach the ref to the input element */}
      <input type="text" ref={inputRef}/>
      {/* When the button is clicked, focus the input */}
      <button onClick={handleClick}>Focus the input</button>
    </div>
  )
}
