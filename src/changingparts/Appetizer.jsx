import React from 'react'
import Burger from './Burger.jpg'

const Appetizer = () => {
  return (
    
      <div style={{ position: "relative", width: "100%" }}>
  <img src={Burger} alt="Burger" style={{ width: "100%", height: "auto" }} />
  <p style={{
    position: "absolute",
    bottom: "10px",
    left: "10px",
    color: "white",
    
    padding: "5px",
    margin: 0,
    fontSize: "3rem"
  }}>
    Le Catering
  </p>
</div>
  )
}

export default Appetizer
