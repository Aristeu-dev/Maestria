import React from 'react';
import {
  Container,
  Item,
  Title,
  ContainerOption,
  ContentButtons,
  ContentPlayer,
  TitlePlayer,
} from './styles';
import PieChart from 'react-native-pie-chart';
import Donut from '../../atoms/DonutChart';
import Button from '../../atoms/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const Activity: React.FC = () => {
  const data = [
    {
      percentage: 9,
      // color: 'red',
      max: 10,
    },
  ];
  return (
    <Container>
      {data?.map((p, i) => {
        return (
          <Donut
            key={i}
            percentage={p.percentage}
            color={p.color}
            delay={1000}
            max={p.max}
          />
        );
      })}
      <ContainerOption>
        <Title>Ler um livro</Title>
        <ContentButtons>
          <Button
            background="#F5EEFC"
            color="#9B51E0"
            height="24px"
            width="60px"
            fontSize="12px"
          >
            Editar
          </Button>
          <Button
            background="#F5EEFC"
            color="#FD5B71"
            height="24px"
            width="60px"
            fontSize="12px"
          >
            Excluir
          </Button>
        </ContentButtons>
      </ContainerOption>
      <ContentPlayer>
        <TitlePlayer>1 / 3</TitlePlayer>
        <Icon name="play-circle" size={30} color="#4f4f4f" radius={15} />
      </ContentPlayer>
    </Container>
  );
};
export default Activity;
