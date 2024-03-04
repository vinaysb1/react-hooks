import React from 'react'
import { UserContext } from './Component1'
import { useContext } from 'react'

const Component4 = () => {
    const user = useContext(UserContext)
  return (
    <div>
      <h1>Hello {user}</h1>
    </div>
  )
}

export default Component4
