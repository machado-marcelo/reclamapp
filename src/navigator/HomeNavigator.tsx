import { ComplaintDetails } from "../screens/ComplaintDetails";
import { DrawerMenuContent } from "../components/DrawerMenuContent";
import { Home } from "../screens/Home";
import React from "react";
import { Splash } from "../screens/Splash";
import { createDrawerNavigator } from "@react-navigation/drawer";

const { Navigator, Screen } = createDrawerNavigator();

export const HomeNavigator = () => {
  return (
      <Navigator
       initialRouteName={'Home'} 
       drawerContent={DrawerMenuContent}
       screenOptions={{
        headerShown: false,
      }}  
      >
        <Screen name="Splash" component={Splash}/>
        <Screen name="Home" component={Home}/>
        <Screen name="ComplaintDetails" component={ComplaintDetails} />
      </Navigator>
  );
}


