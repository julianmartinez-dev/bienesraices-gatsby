import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ListadoPropiedades from "../components/listadoPropiedades"

const ContenidoPagina = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

`



export const query = graphql`
  query ($id: String!) {
    allStrapiPagina(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        contenido
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`

const Pagina = ({
  data: {
    allStrapiPagina: { nodes },
  },
}) => {
  const {
    nombre,
    contenido,
    imagen,
  } = nodes[0]

  const image = getImage(imagen[0].localFile)


  return (
    <Layout>
        
        <main className="contenedor">
            <h1>{nombre}</h1>
            <ContenidoPagina>
            <GatsbyImage image={image} alt={`imagen ${nombre}`} />
            <p>{contenido}</p>
            </ContenidoPagina>
        </main>

        { nombre === 'Propiedades' && <ListadoPropiedades /> }
       
      
    </Layout>
  )
}

export default Pagina
