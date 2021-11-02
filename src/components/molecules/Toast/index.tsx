import React from 'react';
import { Container, Content } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IIcons, IToastElement } from '../../../interfaces/Toast';
import { colors } from './styles';
import Text from '../../../components/atoms/Text';
export const Toast: React.FC<IToastElement> = ({
  hide,
  message,
  type,
}: IToastElement) => {
  const icons: IIcons = {
    error: 'times-circle',
    sucess: 'check-circle',
    info: 'info-circle',
  };

  return (
    <Container onPress={hide} type={type}>
      <Icon
        name={icons[type] || icons['info']}
        size={25}
        color={colors[type] || colors['info']}
      />
      <Content>
        <Text fontSize="16px" fontFamily="Rubik_400Regular">
          {' '}
          {message}
        </Text>
      </Content>
    </Container>
  );
};

export default Toast;
