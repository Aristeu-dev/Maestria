import styled from 'styled-components';
import Button from '../../atoms/Button';
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 15px;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const Row = styled.View`
  height: 160px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TitleHeader = styled.Text`
  color: #070417;
  font-size: 24px;
  font-family: Rubik_500Medium;
`;

export const Exit = styled(Button)`
  width: 43px;
  height: 24px;
  background: #ffeff1;
  color: #fd5b71;
`;
