import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled(RectButton)`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '60px')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '10px')};
  justify-content: center;
  align-items: center;
  top: ${props => (props.top ? props.top : 0)};
  background: ${props => (props.background ? props.background : '#1b143f')};
`;
export const ButtonText = styled.Text`
  font-family: Rubik_400Regular;
  color: ${props => (props.color ? props.color : '#FFFFFF')};
  font-size: ${props => (props.fontSize ? props.fontSize : '16px')};
`;
