import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useContext,
} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  Animated,
  TextInput,
  Easing,
} from 'react-native';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SignUpImg from '../../../assets/signUp.svg';
import Text from '../../atoms/Text';
import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import CREATE_USER from '../../../graphql/useUser';
import { useMutation } from '@apollo/client';
import { ICreateUser } from '../../../interfaces/User';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { ToastContext } from '../../../contexts/toastContext';
import { fadeIn } from '../../../animation/slide';
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { width } = Dimensions.get('window');
  const toRight = useRef(new Animated.Value(width)).current;
  const passwordInputRef = useRef<TextInput>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { show } = useContext(ToastContext);
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  useEffect(() => {
    if (error) {
      show({
        message: 'Ocorreu um erro ao criar a sua conta.',
        type: 'error',
      });
    }
    if (loading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (data) {
      show({
        message: 'Você já pode entrar na sua conta.',
        type: 'error',
      });
    }
  }, [error, loading]);

  const handleSignUp = useCallback((data: ICreateUser) => {
    createUser();
  }, []);

  // toValue: 0,
  //   duration: 800,
  //   useNativeDriver: true,
  //   easing: Easing.ease,

  useEffect(() => {
    fadeIn({
      duration: 800,
      direction: toRight,
      useNativeDriver: true,
      easing: Easing.ease,
    });
  }, []);

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
            <Text fontSize="20px">Vamos começar?</Text>

            <SignUpImg height={width * 0.7} width={width * 0.7} />

            <Form
              style={{ width: '100%' }}
              ref={formRef}
              onSubmit={handleSignUp}
            >
              <Input
                name="name"
                autoCapitalize="words"
                icon="mail"
                placeholder="Nome completo"
                borderRadius="40px"
                returnKeyType="next"
                onSubmitEditing={() => {}}
              />
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                borderRadius="40px"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                borderRadius="40px"
                secureTextEntry
                returnKeyType="send"
                textContentType="newPassword"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Button
                background="#3D4ABA"
                loading={isLoading}
                borderRadius="40px"
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
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
export default SignUp;
