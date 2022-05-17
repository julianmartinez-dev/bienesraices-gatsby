import React from "react"
import Iconos from "./iconos"
import styled from "@emotion/styled"
import { GatsbyImage, getImage  } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import {convert} from 'url-slug'

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`

const Card = styled.div`
    border: 1px solid #e1e1e1;

    img{ 
        max-width: 100%;
    }
`

const Contenido = styled.div`
    padding: 2rem;

    h3{
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .precio{
        font-size: 1.8rem;
        color: #75AB00;
    }
`

const PropiedadPreview = ({ propiedad }) => {
  const {
    id,
    nombre,
    precio,
    habitaciones,
    estacionamiento,
    agente,
    wc,
    categoria,
    descripcion,
    imagen
  } = propiedad

  const image = getImage(imagen.localFile)
  const slug = convert(nombre)

  return (
    <Card>
        <GatsbyImage image={image} alt={`imagen ${nombre}}`} />

        <Contenido>
            <h3>{nombre}</h3>
            <p className="precio">${precio} </p>
            <Iconos wc={wc} estacionamiento={estacionamiento} habitaciones={habitaciones}/>
        </Contenido>

        <Boton
            to={`/propiedades/${slug}`}
        >
            Visitar Propiedad
        </Boton>

    </Card>
  )
}

export default PropiedadPreview
