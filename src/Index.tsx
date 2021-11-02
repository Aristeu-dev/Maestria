import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, Button } from 'react-native';
import Routes from './components/routes';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
} from '@expo-google-fonts/rubik';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ToastProvider } from './contexts/toastContext';
import { ToastContainer } from './components/molecules/Toast/ToastContainer';
const client = new ApolloClient({
  uri: 'http://192.168.0.8:4000//graphql',
  cache: new InMemoryCache(),
});

const Index: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#FAFAFF" />
        <View style={{ flex: 1, backgroundColor: '#FAFAFF' }}>
          <ToastProvider>
            <ToastContainer />
            <Routes />
          </ToastProvider>
        </View>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default Index;
