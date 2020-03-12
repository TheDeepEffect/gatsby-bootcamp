import React from "react"
import { graphql } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import toHtml from "string-to-html"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      date
      content
    }
  }
`

const Blog = props => {
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       const alt = node.data.target.fields.title["en-US"]
  //       const url = node.data.target.fields.file["en-US"].url
  //       return <img style={{ width: "50vw" }} alt={alt} src={url} />
  //     },
  //   },
  // }
  return (
    <Layout>
      <Head title={props.data.wordpressPost.title} />
      <h1>{props.data.wordpressPost.title}</h1>
      <p>{props.data.wordpressPost.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.content }}
      ></div>
    </Layout>
  )
}

export default Blog
