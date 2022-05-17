import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import * as heroCSS from "../css/hero.module.css"

const ImagenBackground = styled(BackgroundImage)`
  height: 300px;
`

const Encuentra = () => {
  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
           
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImagenBackground fluid={imagen.childImageSharp.fluid} fadeIn="soft">
      <div className={heroCSS.imagenbg}>
        <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
        <p>15 Años de experiencia</p>
      </div>
    </ImagenBackground>
  )
}

export default Encuentra
