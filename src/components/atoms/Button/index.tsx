import React from 'react';
import { Container, ButtonText } from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
  children: string | Element;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText {...rest}>{children}</ButtonText>
    </Container>
  );
};
export default Button;
