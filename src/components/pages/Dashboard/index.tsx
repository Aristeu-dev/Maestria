import React from 'react';
import { Container, Header, Row, TitleHeader, Exit } from './styles';
import IconHeader from 'react-native-vector-icons/AntDesign';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <IconHeader name="arrowleft" size={25} color="#070417" />
        <TitleHeader>Dashboard</TitleHeader>
        <Exit>Sair</Exit>
      </Header>
    </Container>
  );
};

export default Dashboard;
