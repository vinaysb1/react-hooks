import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
  
    return <h1>I've rendered {count} times!</h1>;
};

export default Timer;


