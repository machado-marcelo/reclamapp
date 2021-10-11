import { Image, Text, View } from "react-native"

import React from "react"
import { SIZES } from "../../../constants"

export const StepThree = () => {

    return (
    <View style={{ width: SIZES.width }}>
        <View>
            <View style={{
                marginTop: 100,
                marginBottom: 20,
                width: SIZES.width,
                height: 200,
                alignItems: 'center',
                justifyContent: 'center'
            }} >
                <Image
                    style={{ width: SIZES.width / 1.5 }}
                    resizeMode={'center'}
                    source={require("../../../assets/svg/onBoardingStep3.png")}
                />
            </View>
                
        <Text style={{
            paddingHorizontal: 50,
            paddingTop: 30,
            paddingBottom: 20,
            fontSize: 25,
            textAlign: 'center',
        }}>
            {'Suas queixas e\ndos demais usuários\nficam marcados no mapa\ne você poderá acompanhar\no resultado.'}
        </Text>
    </View>
    </View>
    );
}