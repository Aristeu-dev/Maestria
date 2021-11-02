import styled from 'styled-components/native';
import { Animated } from 'react-native';
export const Container = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Ball = styled(Animated.View)`
  width: 10px;
  height: 10px;
  border-radius: 7px;
  background: ${({ color }: string) => color || 'blue'};
`;
