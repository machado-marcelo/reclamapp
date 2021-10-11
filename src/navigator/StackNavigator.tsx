import { HomeNavigator } from "./HomeNavigator";
import { OnBoarding } from "../screens/OnBoarding";
import React from "react";
import { SignIn } from "../screens/SignIn";
import { Splash } from "../screens/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Navigator, Screen } = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
      <Navigator
        initialRouteName={'Splash'} 
        screenOptions={{
          headerShown: false,
        }}        
      >
        <Screen name="Splash" component={Splash}/>
        <Screen name="OnBoarding" component={OnBoarding} />
        <Screen name="SignIn" component={SignIn}/>
        <Screen name="HomeNavigator" component={HomeNavigator}/>
      </Navigator>
  );
}

