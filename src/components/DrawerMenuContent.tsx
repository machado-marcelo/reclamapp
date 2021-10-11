import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

import React from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export const DrawerMenuContent = ({navigation} : {navigation: any}) => {

    const { removeItem } = useAsyncStorage('@token');

    async function handleSignOut(){
        await removeItem().finally(() => {
            navigation.navigate('Splash', { routeName: 'Home'});
        });        
    }
    
    return (
    <DrawerContentScrollView>
        <DrawerItem
          label="Sair"
          onPress={() => handleSignOut()}
        />
      </DrawerContentScrollView>
    );
  }

