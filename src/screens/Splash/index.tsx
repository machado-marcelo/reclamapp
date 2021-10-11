import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, { useEffect } from 'react';

import { COLORS } from '../../constants';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export function Splash({navigation, route} : {navigation: any, route: Readonly<{params: any}>}) {

  const routeNameToRedirect = route.params?.routeName || 'HomeNavigator'

  const { getItem } = useAsyncStorage('@token');

  useFocusEffect(() => {  
     handleGetToken();
  });

  async function handleGetToken() {      

    const userToken = await getItem();
    if(!userToken){
      navigation.navigate('OnBoarding');
    } else {
      // TODO ---  VALIDAR TOKEN ANTES DE REDIRENCIONAR PARA HOME
      navigation.navigate(routeNameToRedirect);
    }  
  }


  return (
    <View style={styles.splash}>
         <ActivityIndicator size="large" color="#fff" />
    </View>
  );
}


const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary 
  },
});

