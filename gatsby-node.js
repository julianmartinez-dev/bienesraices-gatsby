const urlSlug = require('url-slug')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const resultado = await graphql(`
    query {
      allStrapiPagina{
        nodes {
          nombre
          id
        }
      }
      allStrapiPropiedad {
        nodes {
          nombre
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
const paginas = resultado.data.allStrapiPagina.nodes
const propiedades = resultado.data.allStrapiPropiedad.nodes


//Crear los templates para paginas
paginas.forEach(pagina => {
    createPage({
        path: `/${urlSlug.convert(pagina.nombre)}`,
        component: require.resolve(`./src/templates/pagina.js`),
        context: {
            id: pagina.id
        },
        defer: true
    })
})


//Crear los templates para propiedades
  propiedades.forEach(propiedad => {
    const slug = urlSlug.convert(propiedad.nombre)
    createPage({
      path: "/propiedades/" + slug,
      component: require.resolve("./src/templates/propiedad.js"),
      context: {
        id: propiedad.id,
      },
      defer: true,
    })
  })

}
