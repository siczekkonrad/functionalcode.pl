import React from 'react';
import styles from './PostTile.module.scss'
import Link from 'next/link'

export interface PostTileProps {
    post: any;
}

const PostTile: React.FC<PostTileProps> = ({ post }) => {
    return (
        <article className={styles.article}>
            <Link href={`/blog/${post.slug}`} passHref>
                <a>
                    <h3>{post.frontmatter.title}</h3>
                    <p>{post.frontmatter.description}</p>
                </a>
            </Link>
        </article>
    );
};

export default PostTile;
