import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default function About({ data }) {
  return (
    <Layout>
    <SEO title="About" />
      <h2  >About {data.site.siteMetadata.title}</h2>
      <p>
         Can you read gibberish? Let's find out!
         
      </p>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`