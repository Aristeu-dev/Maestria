import styled from 'styled-components/native';
import { IIcons } from '../../../interfaces/Toast';

export const colors: IIcons = {
  error: '#EB5757',
  sucess: '#07E092',
  info: '#FFA656',
};

export const Container = styled.View`
  padding-left: 10px;
  /* background: pink; */
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  min-height: 32;
  width: 90%;
  height: 100%;
  border-left-width: 5px;
  border-left-color: ${(props: { type: string | number }) =>
    colors[props.type] || colors['info']};
`;

export const Content = styled.View`
  flex: 1;
`;
