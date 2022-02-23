import React, { FC } from 'react'
import styles from './Container.module.scss'


interface ContainerProps {
  className?: string;
}

const Container: FC<ContainerProps> = ({
  children,
  className
}) => {
  return <div className={styles.container}>{children}</div>
}

export default Container;