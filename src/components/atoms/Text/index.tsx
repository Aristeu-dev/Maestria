import React, { Children } from 'react';
import { Container } from './styles';

const Text: React.FC = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
export default Text;
