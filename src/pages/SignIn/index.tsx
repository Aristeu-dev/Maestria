import React from "react";

import { Image } from "react-native";
import logoImg from "../../assets/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Title } from "./styles";
const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} style={{ width: 200, height: 200 }} />

      {/* <Title>Login</Title> */}

      <Input name="email" icon="mail" placeholder="E-mail" />

      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => console.log("Deu")}>Entrar</Button>
    </Container>
  );
};
export default SignIn;
