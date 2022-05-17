import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Iconos from "../components/iconos"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

const SideBar = styled.aside`
  .precio{
    font-size: 4rem;
    color: #75ab00;
    font-weight: 700;

  }
  .agente{
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75ab00;
    padding: 3rem;
    color: #fff;

    p{
      margin: 0;
    }
  }
`

export const query = graphql`
  query ($id: String) {
    allStrapiPropiedad(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        precio
        wc
        habitaciones
        estacionamiento
        categoria {
          nombre
        }
        agente {
          nombre
          telefono
          email
        }
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          id
        }
        strapi_id
        descripcion {
          data {
            descripcion
          }
        }
      }
    }
  }
`

const Propiedad = ({
  data: {
    allStrapiPropiedad: { nodes },
  },
}) => {
  console.log(nodes[0])
  const {
    nombre,
    descripcion,
    precio,
    categoria,
    habitaciones,
    estacionamiento,
    agente,
    imagen,
    wc,
  } = nodes[0]

  const image = getImage(imagen.localFile)

  return (
    <Layout>
      <h1>{nombre}</h1>
      <Contenido>
        <main>
          <GatsbyImage image={image} alt={`imagen ${nombre}`} />
          <p>{descripcion.data.descripcion}</p>
        </main>
        <SideBar>
          <p className="precio">${precio}</p>
          <Iconos
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />

          <div className="agente">
            <h2>Vendedor:</h2>
            <p>{agente.nombre}</p>
            <p>Tel: {agente.telefono}</p>
            <p>Email: {agente.email}</p>
          </div>
        </SideBar>
      </Contenido>
    </Layout>
  )
}

export default Propiedad
