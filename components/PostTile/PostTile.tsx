import React from 'react';
import { StyledPostTile } from './PostTile.style';
import Link from 'next/link'

export interface PostTileProps {
    post: any;
}

const PostTile: React.FC<PostTileProps> = ({ post }) => {
    return (
        <StyledPostTile>
            <Link href={`/blog/${post.slug}`} passHref>
                <a>
                    <h3>{post.frontmatter.title}</h3>
                    <p>{post.frontmatter.description}</p>
                </a>
            </Link>
        </StyledPostTile>
    );
};

export default PostTile;
