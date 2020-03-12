import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact Us" />
      <h1>Contact Information</h1>
      <p>Contact us at aaa123@hotmail.com</p>
      <p>
        Google :
        <a href="https://www.google.com" target="_blank">
          @Google
        </a>
      </p>
    </Layout>
  )
}
export default ContactPage
