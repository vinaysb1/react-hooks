import React from 'react'
import { useState,useEffect } from'react';

const Timer = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });
      
  return (
    <div>
      it renders {count} times
    </div>
  )
}

export default Timer
