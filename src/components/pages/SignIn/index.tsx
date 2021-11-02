import React, { useRef, useEffect, useCallback } from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import logoImg from '../../../assets/logo.png';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Login from '../../../assets/login.svg';
import Text from '../../atoms/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import {
  Container,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
const SignIn: React.FC = () => {
  const { height, width } = Dimensions.get('window');
  const toRight = useRef(new Animated.Value(-width)).current; // Initial value for opacity: 0
  const formRef = useRef<FormHandles>(null);

  const fadeIn = () => {
    Animated.timing(toRight, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  useEffect(() => fadeIn(), []);
  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container
            style={{
              transform: [
                {
                  translateY: toRight,
                },
              ],
            }}
          >
            <Text fontSize="20px">É um prazer ter você</Text>
            <Text fontSize="24px" color="#07E092">
              Por aqui
            </Text>

            <Login height={width * 0.7} width={width * 0.7} />
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                borderRadius="40px"
              />
              <Input
                name="password"
                icon="lock"
                placeholder="Senha"
                borderRadius="40px"
              />
              <Button
                background="#3D4ABA"
                borderRadius="40px"
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => {}}>
        <Icon name="log-in" size={20} color="#070417" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};
export default SignIn;
