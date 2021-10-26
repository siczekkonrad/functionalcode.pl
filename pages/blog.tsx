import Link from 'next/link'
import { getAllPosts } from '../utils/mdx'
import React from 'react'
import MainTemplate from '../components/MainTemplate'

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
    <MainTemplate>
      <h1>All posts</h1>
      <ul>
        {posts.map((post: any, index: number) => (
          <li key={index}>
            <Link href={`/blog/${post.slug}`} passHref><a>{post.frontmatter.title}</a></Link>
          </li>
        ))}
      </ul>
    </MainTemplate>
  )
}

export default Blog

export const getStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: { posts },
  }
}