import { getAllPosts } from '../utils/mdx'
import React from 'react'
import MainTemplate from '../components/MainTemplate'
import PostTile from '../components/PostTile';
import PageHero from 'components/PageHero/PageHero';
import BlogGrid from 'components/BlogGrid/BlogGrid';

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
      <PageHero title="Blog" />
      <BlogGrid>
        {posts?.map((post: any, index: number) => (
          <PostTile post={post} key={index} />
        ))}
      </BlogGrid>
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