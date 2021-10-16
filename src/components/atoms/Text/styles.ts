import styled from 'styled-components';

export const Container = styled.Text`
  color: ${props => (props.color ? props.color : '#070417')};
  font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : 'Rubik_500Medium'};
  padding-right: 20px;
  width: ${props => (props.width ? props.width : '100%')}; 
  align-items: center;
  justify-content: space-between;
`;
