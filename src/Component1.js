
import React, { createContext } from 'react';
import Component2 from './Component2'

export const UserContext = createContext();

const Component1 = () => {
  return (
    <div>
<UserContext.Provider value={'John'}>
      <Component2 />
      </UserContext.Provider>
    </div>
  )
}

export default Component1
