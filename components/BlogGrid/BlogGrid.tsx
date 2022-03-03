import React from 'react';
import styles from './BlogGrid.module.scss';

const BlogGrid = ({ children }: any) => {
  return (
    <div className={styles.blogGrid}>
      {children}
    </div>
  );
};

export default BlogGrid;