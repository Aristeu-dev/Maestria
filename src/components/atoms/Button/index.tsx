import React from 'react';
import { Container, ButtonText } from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Loader from '../Loader';

interface ButtonProps extends RectButtonProperties {
  children: string | Element;
  loading: boolean;
  rest: string | number;
}

const Button: React.FC = ({
  children,
  loading = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container {...rest}>
      {loading ? <Loader /> : <ButtonText {...rest}>{children}</ButtonText>}
    </Container>
  );
};
export default Button;
