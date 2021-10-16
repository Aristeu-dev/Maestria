import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../../pages/Dashboard';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import HistoryIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddIcon from 'react-native-vector-icons/Ionicons';
import SignIn from '../../pages/SignIn';
import History from '../../pages/History';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 5,
          left: 10,
          right: 10,
          backgroundColor: '#E5E5E5',
          borderRadius: 15,
          height: 75,
          borderTopColor: 'transparent',
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 0,
        },
      }}
      sceneContainerStyle={{ backgroundColor: '#FFFF' }}
    >
      <Tab.Screen
        name="Login"
        component={SignIn}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HistoryIcon name="history" size={28} color="#939297" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AddIcon name="add-circle" color="#070417" size={60} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HistoryPersonal"
        component={History}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name="pie-chart" size={28} color="#939297" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
