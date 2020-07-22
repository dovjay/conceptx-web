import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Articles({ data }) {
  console.log(data)
  return(
    <Layout>
      <div className="w-75 mx-auto">
        <h1>Articles</h1>
        <p>Our handful written article to give you insightful knowledge and learn more about what is trending in technology industry nowadays.</p>
        <hr/>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className="mt-5">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <div>
                <Link to={`/${node.fields.slug}`}><span className="h3">{node.frontmatter.title}</span></Link>
                <span className="ml-1 text-secondary font-weight-bold"> - {node.frontmatter.date}</span>
              </div>
              <p className="mt-2">{node.excerpt}</p>
            </div>
          ))}
        </div>
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