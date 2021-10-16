import React from 'react';
import { Container, Remaining, RoutineTitle, ContentIconName } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../../atoms/Text';

const CardRoutine: React.FC = () => {
  return (
    <Container>
      <Remaining>Restam: 25 dias</Remaining>
      <ContentIconName>
        <Icon
          name="road"
          size={25}
          color="#7012CE"
        />
        <Text color="#FFFFFF" fontFamily=" Rubik_400Regular" fontSize="16px">
          Serenidade
        </Text>
      </ContentIconName>
    </Container>
  );
};

export default CardRoutine;
