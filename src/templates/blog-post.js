import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio/bio"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import "./blogPost.scss";

const BlogPostTemplate = props => {

  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="articleSingle"
      >
        <header>
          <h1
            className="articleSingle__title"
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `inline-block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <p
            style={{
              ...scale(-1 / 5),
              display: `inline-block`,
              lineHeight: `1.5`,
              marginBottom: rhythm(1),
              marginLeft: `10px`,
              background: `#ecf0f2`,
              padding: `0 5px`,
              borderRadius: `5px`
            }}
          >
            {post.frontmatter.category}
          </p>
          
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                className="postNav__link prevLink">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug}
                rel="next"
                className="postNav__link nextLink"
              >
                {next.frontmatter.title} →
                </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )

}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD.MM YYYY")
        description
        category
      }
    }
  }
`
