import { getAllPosts } from '../utils/mdx'
import React from 'react'
import MainTemplate from '../components/MainTemplate'
import PostTile from '../components/PostTile';
import PageHero from 'components/PageHero/PageHero';

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
      <div className="grid grid-cols-2 gap-60">
        {posts?.map((post: any, index: number) => (
          <PostTile post={post} key={index} />
        ))}
      </div>
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