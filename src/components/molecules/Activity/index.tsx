import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconHeader from 'react-native-vector-icons/AntDesign';
import { Container, Item, Title } from './styles';
const Activity: React.FC = () => {
  return (
    <Container>
      <Item>
        <Icon name="running" size={60} color="#3D4ABA" />
      </Item>
      <Title>CORRER 2.5KM</Title>
    </Container>
  );
};
