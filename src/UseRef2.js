import React, { useEffect } from 'react'
import { useRef } from 'react';

const UseRef2 = () => {
    const [inputValue, setInputValue] = React.useState("");
    const PreviousInputValue = useRef("");

    useEffect(() => {
        PreviousInputValue.current = inputValue;
    }, [inputValue]);
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <h2>current Value:{inputValue}</h2>
      <h2>PreviousInputValue:{PreviousInputValue.current}</h2>
    </div>
  )
}

export default UseRef2
