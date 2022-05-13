import { Link } from 'gatsby'
import React from 'react'

const Navegacion = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/propiedades">Propiedades</Link>
    </nav>
  )
}

export default Navegacion