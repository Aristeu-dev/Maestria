import React, { useRef, useEffect } from 'react';
import { Dimensions, Animated, Easing } from 'react-native';
import { Container } from './styles';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Mornings from '../../../assets/mornings.svg';
import { useNavigation } from '@react-navigation/native';

const Welcome: React.FC = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get('window');

  const toRight = useRef(new Animated.Value(-width)).current;

  const fadeIn = () => {
    Animated.timing(toRight, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const fadeOut = () => {
    return new Promise(resolve => {
      Animated.timing(toRight, {
        toValue: -(width * 0.8),
        duration: 600,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start(({ finished }) => {
        resolve(finished);
      });
    });
  };

  useEffect(() => fadeIn(), []);

  return (
    <Container>
      
      <Animated.View
        style={{
          width: '80%',
          height,
          backgroundColor: '#070417',
          borderTopEndRadius: 30,
          borderBottomEndRadius: 30,
          justifyContent: 'space-around',
          transform: [
            {
              translateX: toRight,
            },
          ],
        }}
      >
        <Animated.View
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            alignItems: 'center',
            flexDirection: 'column',

            transform: [
              {
                translateX: toRight,
              },
            ],
          }}
        >
          <Text color="#FFFFFF" fontSize="20px">
            SEJA
          </Text>
          <Text color="#FFFFFF" fontSize="26px">
            BEM-VINDO!
          </Text>
        </Animated.View>

        <Animated.View
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            alignItems: 'center',

            transform: [
              {
                translateX: toRight,
              },
            ],
          }}
        >
          <Mornings height={width * 0.7} width={width * 0.7} />
        </Animated.View>
        <Animated.View
          style={{
            marginBottom: 0,
            // backgroundColor: 'pink',
            alignItems: 'center',
            transform: [
              {
                translateX: toRight,
              },
            ],
          }}
        >
          <Button
            width={'50%'}
            height="50px"
            marginBottom="20px"
            background="#3D4ABA"
            borderRadius="40px"
            color="white"
            fontSize="16px"
            onPress={async () => {
              const finished = await fadeOut();
              if (finished) navigation.navigate('SignIn');
            }}
          >
            Login
          </Button>
          <Button
            width={'50%'}
            height="50px"
            background="#E9E9FF"
            borderRadius="30px"
            color="white"
            fontSize="16px"
            color="#070417"
            onPress={async () => {
              const finished = await fadeOut();
              if (finished) navigation.navigate('SignUp');
            }}
          >
            Criar conta
          </Button>
        </Animated.View>
      </Animated.View>
    </Container>
  );
};
export default Welcome;
