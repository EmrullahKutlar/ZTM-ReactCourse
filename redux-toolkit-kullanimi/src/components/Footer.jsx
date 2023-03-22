//rafce

import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const counter= useSelector(state => state.counter.value)
  return (
    <div>Counter değerim : {counter}</div>
  )
}

export default Footer