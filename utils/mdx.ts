import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export const POSTS_PATH = path.join(process.cwd(), 'data/blog')

export const getSourceOfFile = (fileName: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName), 'utf8')
}

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName)
      const slug = fileName.replace(/\.mdx?$/, '')
      const { data } = matter(source)

      return {
        frontmatter: data,
        slug: slug,
      }
    })
}

export const getSinglePost = async (slug: string) => {
  const source = getSourceOfFile(slug + '.mdx')

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: process.cwd(),
    esbuildOptions(options) {
      options.platform = 'node'
      return options
    },
  })

  return {
    frontmatter,
    code,
  }
}