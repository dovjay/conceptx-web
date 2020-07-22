import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Articles({ data }) {
  console.log(data)
  return(
    <Layout>
      <h1>Articles</h1>
      <div className="mx-auto w-75 mt-5">
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <div className="d-flex align-items-center">
              <Link to={node.fields.slug}><h3>{node.frontmatter.title}</h3></Link>
              <span className="ml-1 text-secondary font-weight-bold"> - {node.frontmatter.date}</span>
            </div>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`