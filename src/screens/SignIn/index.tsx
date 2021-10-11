import { Button, Icon, Input } from 'react-native-elements'
import { COLORS, SIZES } from "../../constants";
import { Image, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native"
import React, { useState } from "react"

import { AuthDataAccess } from "../../dataAccess/AuthDataAccess";
import { CustomTextInput } from "../../components/CustomTextInput";
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core"

export const SignIn = () => {

    const [userCredentials, setUserCredentials] = useState({
      email: '',
      password: ''
    });
    
    const { setItem } = useAsyncStorage('@token');
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)


    const navigation = useNavigation() as any;

    async function handleCreateSession (){     
      
      setIsSubmitting(true); 
    
      const { data, hasError, statusCode} = await new AuthDataAccess().signIn(
        {email: userCredentials.email, password: userCredentials.password }
      );     

      setIsSubmitting(false); 

      if(hasError){   
        
        /// TRATAR O ERRO NO LOGIN
        
      } else {
        await setItem(data.token).finally(() => {
          navigation.navigate('Splash');
        });
      }

      
    }

    return (
        <SafeAreaView>
            <View
                style={{
                    top: 100,
                    width: SIZES.width,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
         
                <Image
                    resizeMode={'contain'}
                    style={{
                        height: 150,
                        marginBottom: 30,
                    }}
                    source={require("../../assets/svg/reclamapp-logo.png")}
                />
                <View

                    style={{
                      width: SIZES.width - 60
                    }}
                 >
                  <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 15,
                    marginHorizontal: 10,
                    color: COLORS.primary
                  }}
                  >
                    Entre com suas credenciais:
                  </Text>   
                  <CustomTextInput
                    iconLeft={
                      <Icon
                      size={15}
                      style={{
                          marginHorizontal: 15
                        }} 
                        name='envelope'
                        type='font-awesome'
                      />
                    }
                    placeholder="email"
                    onChageValue={(changedValue : string) => setUserCredentials({...userCredentials, email: changedValue})}
                    value={userCredentials.email}
                  />                
                <CustomTextInput
                    iconLeft={
                    <Icon
                      size={20}                    
                      style={{
                          marginHorizontal: 15,
                        }} 
                        name='lock'
                        type='font-awesome'
                      />
                  }
                    iconRight={
                      <TouchableWithoutFeedback
                        onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                      >
                      <Icon
                      size={20}
                      style={{
                          marginHorizontal:15
                        }} 
                        name={isPasswordHidden ? 'eye' : 'eye-slash'}
                        type='font-awesome'
                      />
                      </TouchableWithoutFeedback>
                  }
                  secureTextEntry={isPasswordHidden}
                  placeholder="senha"
                  onChageValue={(changedValue : string) => setUserCredentials({...userCredentials, password: changedValue})}
                  value={userCredentials.password}
                />  

                <Button
                  title="Login"
                  titleStyle={{
                    fontSize: 18,
                    color: 'white',
                    fontWeight: 'bold'    
                  }}
                  buttonStyle={{
                    marginHorizontal: 10,
                    backgroundColor: COLORS.primary,    
                    borderRadius: 10,
                    height: 50,                     
                  }}                 
                  loading={isSubmitting}
                  onPress={() => handleCreateSession() }
                />           
              
               </View>
                                 
            </View>
        </SafeAreaView>
    );
}