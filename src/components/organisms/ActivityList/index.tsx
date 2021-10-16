import React from 'react';
import Activity from '../../molecules/Activity';
import { Container } from './styles';
import Text from '../../atoms/Text';
const ActivityList: React.FC = () => {
  return (
    <Container>
      <Text color="#070417">Hoje</Text>
      <Activity />
      <Activity />
      <Activity />
      <Activity />
    </Container>
  );
};

export default ActivityList;
