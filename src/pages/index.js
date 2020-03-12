import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "./../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>Abcdefghijk LMNOP</h2>
      <p>
        Need a developer ? <Link to="/contact">Contact me..</Link>{" "}
        {/** Link is for internal pages, anchor tag is for external pages */}
      </p>
    </Layout>
  )
}
export default IndexPage
