const urlSlug = require('url-slug')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const resultado = await graphql(`
    query {
      allStrapiPropiedad {
        nodes {
          nombre
          strapi_id
          id
        }
      }
    }
  `)

//   console.log(JSON.stringify(resultado.data.allStrapiPropiedad))

//si no hay resultados
if(resultado.errors){
    reporter.panic('Error al crear páginas', resultado.errors)
}

//Si hay resultados, crear los archivos

const propiedades = resultado.data.allStrapiPropiedad.nodes

console.log(propiedades)

  propiedades.forEach(propiedad => {

    const slug = urlSlug.convert(propiedad.nombre)
    
    createPage({
      path: "/propiedades/" + slug,
      component: require.resolve("./src/templates/propiedad.js"),
      context: {
        slug: slug,
      },
      defer: true,
    })
  })

}
