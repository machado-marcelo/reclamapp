import { COLORS, SIZES } from "../../../constants"
import { Image, Text, TouchableOpacity, View } from "react-native"

import React from "react"
import { useNavigation } from "@react-navigation/core"

export const StepFour = () => {

    const navigation = useNavigation() as any;

    return (
        <View style={{ width: SIZES.width }}>
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
                        marginBottom: 50,
                    }}
                    source={require("../../../assets/svg/reclamapp-logo.png")}
                />                    
                <Text style={{
                    paddingHorizontal: 50,
                    paddingBottom: 50,
                    fontSize: 23,
                    textAlign: 'center',
                }}>
                    {'E aí? Pronto pra ajudar a melhorar sua cidade?'}
                </Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        width: 200,
                        height: 60,
                        alignItems: 'center',
                        borderRadius: 10,
                        justifyContent: 'center'
                    }}
                    onPress={() =>  navigation.navigate('SignIn') }
                    >
                    <Text
                        style={{
                            fontSize: 25,
                            color: 'white',
                            fontWeight: 'bold'
                        }}
                    >
                        {'Iniciar'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}