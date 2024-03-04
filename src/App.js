import React, { useState } from 'react';
import { SomeComponent } from 'html-entities';


function Counter() {
  // Declare a state variable named 'count' and initialize it to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* onClick event handler that calls setCount to update the state */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      console.log(SomeComponent);
    </div>
  );
}

export default Counter;
