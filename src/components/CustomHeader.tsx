import { Header, Icon } from "react-native-elements";

import { COLORS } from "../constants";
import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/core";

export function CustomHeader({leftIconButtonType = 'BACK'}: {leftIconButtonType?: 'BACK' | 'MENU'}) {

  const navigation = useNavigation() as any;
  
  const MenuButton = () => {
    return (
        <View onTouchStart={() => navigation.openDrawer()}>
            <Icon style={{marginLeft: 8}} name={'menu'} color={'#fff'} />
        </View>
    );    
  }
   
  const BackButton = () => {
    return (
        <View onTouchStart={() => navigation.navigate('Home')}>
            <Icon style={{marginLeft: 8}}  name={'arrow-back'} color={'#fff'} />
        </View>
    );    
   }


    return (
        <Header
            statusBarProps={{ barStyle: 'light-content' }}
            backgroundColor={COLORS.primary}
            leftComponent={leftIconButtonType === 'MENU' ? <MenuButton/> : <BackButton/>}
        />
    );

    
}
