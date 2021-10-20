import Link from 'next/link'
import { getAllPosts } from '../utils/mdx'
import React from 'react'

export interface IBlogProps {
  posts: {
    frontmatter: {
      [key: string]: string
    }
    slug: string
  }[]
}

const Blog: React.FC<IBlogProps> = ({ posts }) => {
  return (
    <>
      <h1>All posts</h1>
      <ul>
        {posts.map((post: any, index: number) => (
          <li key={index}>
            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Blog

export const getStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: { posts },
  }
}