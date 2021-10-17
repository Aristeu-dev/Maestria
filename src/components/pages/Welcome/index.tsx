import React, { useRef, useEffect, useCallback } from 'react';
import {
  View,
  Dimensions,
  Animated,
  PanResponder,
  Easing,
  Image,
} from 'react-native';
import { Container } from './styles';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Mornings from '../../../assets/mornings.svg';
import { useState } from 'react';
const Welcome: React.FC = () => {
  const { height, width } = Dimensions.get('window');

  const tabToRight = useRef(new Animated.Value(-width)).current; // Initial value for opacity: 0
  const componentsToRight = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.timing(tabToRight, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      Animated.timing(componentsToRight, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    });
  }, [tabToRight]);

  return (
    <Container>
      <Animated.View // Special animatable View
        style={{
          width: '80%',
          height,
          backgroundColor: '#070417',
          borderTopEndRadius: 30,
          borderBottomEndRadius: 30,
          justifyContent: 'space-around',
          transform: [
            {
              translateX: tabToRight,
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
                translateX: componentsToRight,
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
                translateX: componentsToRight,
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
                translateX: componentsToRight,
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
          >
            Criar conta
          </Button>
        </Animated.View>
      </Animated.View>
    </Container>
  );
};
export default Welcome;

// width: '80%',
//             height,
//             backgroundColor: '#070417',
//             borderTopEndRadius: 30,
//             borderBottomEndRadius: 30,
