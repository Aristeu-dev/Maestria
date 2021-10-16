import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

export const Container = styled.View`
  margin-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  flex-direction: row;
  height: ${windowHeight * 0.12}px;
  width: 100%;
  background: #fafaff;
  border-radius: 15px;
  margin-bottom: 5px;
`;

export const ContainerOption = styled.View`
  width: 45%;
  height: 100%;
  justify-content: space-around;
  height: 100%;
  padding-left: 10px;
`;

export const ContentPlayer = styled.View`
  flex: 1;
  align-items: flex-end;
  height: 100%;
  justify-content: space-around;
`;

export const ContentButtons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Item = styled.View`
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  border-left-color: #9b51e0;
  border-radius: 100;

  border-color: #e9e9ff;
  border-width: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;

  font-family: Rubik_500Medium;
  color: #000000;
`;

export const TitlePlayer = styled.Text`
  font-family: Rubik_400Regular;
  color: #4f4f4f;
`;
