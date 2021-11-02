import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  border-radius: 4px;
  height: 50px;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 2;
  right: 0;
  left: 0;
`;
