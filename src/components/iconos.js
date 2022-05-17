import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3ren auto 0 auto;

    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }
`

const Iconos = ({wc, habitaciones, estacionamiento}) => {

    const { iconos } = useStaticQuery(graphql`
      query {
       iconos: allFile(filter: { relativeDirectory: { eq: "iconosProp" } }) {
          edges {
            node {
              id
              publicURL
            }
          }
        }
      }
    `)

  return (
    <ListadoIconos>
      <li>
        <img src={iconos.edges[2].node.publicURL} alt="icono" />
        <p>{wc}</p>
      </li>
      <li>
        <img src={iconos.edges[1].node.publicURL} alt="icono" />
        <p>{estacionamiento}</p>
      </li>
      <li>
        <img src={iconos.edges[0].node.publicURL} alt="icono" />
        <p>{habitaciones}</p>
      </li>
    </ListadoIconos>
  )
}

export default Iconos