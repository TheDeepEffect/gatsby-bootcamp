import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>Exactly what you think!!</p>
      <p>
        Need a developer ? <Link to="/contact">Contact me..</Link>
        {/** Link is for internal pages, anchor tag is for external pages */}
      </p>
    </Layout>
  )
}

export default AboutPage
