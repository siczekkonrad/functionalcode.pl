import React from 'react';
import Container from '../Container/Container';

const Layout = (props: any) => {
  const { children } = props;
  return (
    <div className="pt-70">
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default Layout;