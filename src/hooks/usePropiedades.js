import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allStrapiPropiedad {
        nodes {
          nombre
          strapi_id
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
          descripcion {
            data {
              descripcion
            }
          }
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  height: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  return resultado.allStrapiPropiedad.nodes.map(propiedad => ({
    id: propiedad.strapi_id,
    nombre: propiedad.nombre,
    precio: propiedad.precio,
    habitaciones: propiedad.habitaciones,
    estacionamiento: propiedad.estacionamiento,
    agente: propiedad.agente,
    wc: propiedad.wc,
    categoria: propiedad.categoria.nombre,
    descripcion: propiedad.descripcion.data.descripcion,
    imagen: propiedad.imagen,
  }))
}

export default usePropiedades
