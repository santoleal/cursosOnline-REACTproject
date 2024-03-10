import React from 'react'
import { Outlet } from 'react-router-dom'

const Footer = () => {
  return (

    <>
    <footer>
    <h3
      style={{
        bottom: 0,
        background: "gray",
        color: "white",
        padding: 20,
        textAlign: "center",
      }}
    >
      Web App desarrollada en curso REACT, noviembre - enero 2024
    </h3>
  </footer>

  </>
  )
}

export default Footer


