import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Tabs from '../organisms/Tabs/tabs';
import Welcome from '../pages/Welcome';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  const [isSigned, setIsSigned] = useState(true);

  return (
    <>
      {isSigned ? (
        <Auth.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' },
          }}
        >

          <Auth.Screen name="Welcome" component={Welcome} />
          <Auth.Screen name="SignIn" component={SignIn} />
          <Auth.Screen name="SignUp" component={SignUp} />
          <Auth.Screen name="Dashboard" component={Dashboard} />
        </Auth.Navigator>
      ) : (
        <NavigationContainer independent={true}>
          <Tabs />
        </NavigationContainer>
      )}
    </>
  );
};

export default AuthRoutes;
