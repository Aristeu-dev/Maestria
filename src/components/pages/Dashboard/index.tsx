import React from 'react';
import { Container, Header, Row, Title } from './styles';
import IconHeader from 'react-native-vector-icons/AntDesign';

import Button from '../../atoms/Button';
import CardRoutine from '../../molecules/CardRoutine';
import ActivityList from '../../organisms/ActivityList';
const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Minha rotina</Title>
      <CardRoutine></CardRoutine>
      <ActivityList></ActivityList>
    </Container>
  );
};

export default Dashboard;
