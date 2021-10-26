import React, { FC } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: var(--container-width);
  margin-left: auto;
  margin-right: auto;
  padding: 0 5.2rem;
`;

interface ContainerProps {
  className?: string;
}

const Container: FC<ContainerProps> = ({
  children,
  className
}) => {
  return <StyledContainer className={className}>{children}</StyledContainer>
}

export default Container;