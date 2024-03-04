import React from 'react'
import { useState } from 'react'

function Car() {
    const [brand,setBrand] = useState('Ford')   
    const [model,setModel] = useState('Mustang')
    const [year,setYear] = useState(2018)
    const [color,setColor] = useState('red')
  return (
    <div>
        <h1>my {brand}</h1>
        <p>I have {brand} {color} car taken in the year {year}</p>
        </div>
  )
}

export default Car

