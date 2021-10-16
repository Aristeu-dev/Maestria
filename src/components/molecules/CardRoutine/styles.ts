import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: ${() => windowHeight * 0.15}px;
  background: #070417;
  border-radius: 10px;
  padding: 15px;
  justify-content: space-between;
  margin-top: 25px;
`;

export const Remaining = styled.Text`
  color: #ffffff;
  font-family: Rubik_500Medium;
  font-size: 32px;
`;
export const RoutineTitle = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: Rubik_400Regular;
`;

export const ContentIconName = styled.View`
  flex-direction: row;
  align-items: center;
  width: 50%;
   justify-content: space-between;
`;
