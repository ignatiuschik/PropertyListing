import React from 'react'

const Footer = () => {

    const myDate = new Date ();

  return (
    
    <footer>Copyright &copy; {myDate.getFullYear()} </footer>
  )
}

export default Footer