import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #e9e9ff;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  font-family: Rubik_400Regular;
  border-radius: ${(props: { borderRadius: string }) =>
    props.borderRadius ? props.borderRadius : '10px'};
`;

export const TextInput = styled.TextInput`
  font-family: Rubik_400Regular;
  flex: 1;
  color: #070417;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
