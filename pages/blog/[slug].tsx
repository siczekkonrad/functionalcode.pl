import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React, { useMemo } from 'react'
import { getAllPosts, getSinglePost } from '../../utils/mdx'

export interface IPostProps {
  code: string
  frontmatter: {
    [key: string]: string
  }
}

const Post: React.FC<IPostProps> = ({ code, frontmatter }) => {
  const Component = getMDXComponent(code)
  return (
    <>
      <Component />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (props) => {
  const post = await getSinglePost(
    (props.params as ParsedUrlQuery).slug as string
  )
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export default Post