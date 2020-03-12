const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBlogPost.edges.forEach(
    edge => {
      createPage({
        path: `/blog/${edge.node.slug}`,
        component: blogTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    }
    // console.log(edge.node.fields.slug)
  )
}
// res.data.allMarkdownRemark.edges.map(edge => {
//   createPage({
//     component: blogTemplate,
//     path: `/blog/${edge.node.fields.slug}`,
//     context: {
//       slug: edge.node.fields.slug,
//     },
//   })
// })
