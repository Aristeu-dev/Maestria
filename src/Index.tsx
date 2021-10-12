import "react-native-gesture-handler";
import React from "react";
import { View, StatusBar } from "react-native";
import Routes from "./components/routes";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";

const Index: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFF" />
      <View style={{ flex: 1, backgroundColor: "#FAFAFF" }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default Index;
