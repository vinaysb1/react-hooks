import React from 'react';
import FavoriteColor from './FavoriteColor';
import Car from './Car';
import Timer from './Timer';
import Counter from './Counter';
import Component1 from './Component1'
import UseRef from './UseRef'
import UseRef2 from './UseRef2'
import ReducerDemo from './ReducerDemo'


function App() {
  return (
    <div className="App">
      <ReducerDemo />
      <UseRef2 />
      <UseRef />
      <Component1 />
      <FavoriteColor />
      <Car />
      <Timer /> 
      <Counter />
    </div>
  );
}

export default App;
