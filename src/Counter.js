import React, { useEffect } from 'react'
import { useState } from'react';
import { useEffe} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(()=> {
        setCalculation(()=>count*2)
    },[count]);
    
  return (
    <div>
      <p>count:{count}</p>
      <button type='button' onClick={()=>setCount((c)=>c+1)}>+</button>
<p>Calculation:{calculation}</p>
    </div>
  )
}

export default Counter
