import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="w-75 mx-auto" style={{ minHeight: '60vh' }}>
        <div className="mb-5"><Link to="/articles">Go Back</Link></div>
        <h1>{post.frontmatter.title}</h1>
        <p className="text-secondary">{post.frontmatter.description}</p>
        <hr/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`