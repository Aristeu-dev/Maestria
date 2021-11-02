import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled(RectButton)`
  width: ${(props: { width: string }) => (props.width ? props.width : '100%')};
  height: ${(props: { height: string }) =>
    props.height ? props.height : '60px'};
  border-radius: ${(props: { borderRadius: string }) =>
    props.borderRadius ? props.borderRadius : '10px'};
  justify-content: center;
  align-items: center;
  top: ${(props: { top: string }) => (props.top ? props.top : 0)};
  background: ${(props: { background: string }) =>
    props.background ? props.background : '#1b143f'};
  margin-bottom: ${(props: { marginBottom: string }) =>
    props.marginBottom ? props.marginBottom : 0};
`;
export const ButtonText = styled.Text`
  font-family: Rubik_400Regular;
  color: ${(props: { color: string }) =>
    props.color ? props.color : '#FFFFFF'};
  font-size: ${(props: { fontSize: string }) =>
    props.fontSize ? props.fontSize : '16px'};
`;
