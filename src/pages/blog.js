import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

import blogStyle from "./blog.module.scss"
import Head from "./../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            title
            slug
            date
          }
        }
      }
    }
  `)

  const list = data.allWordpressPost.edges.map(edge => (
    <li className={blogStyle.post}>
      <Link to={`/blog/${edge.node.slug}`}>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.date}</p>
      </Link>
    </li>
  ))

  return (
    <Layout>
      <Head title="Blogs" />
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>{list}</ol>
    </Layout>
  )
}

export default BlogPage
