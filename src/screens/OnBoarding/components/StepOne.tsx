import { Image, Text, View } from "react-native"

import React from "react"
import { SIZES } from "../../../constants"

export const StepOne = () => {

    return (
    <View style={{ width: SIZES.width }}>
        <View>
            <View style={{
                marginTop: 60,
                width: SIZES.width,
                alignItems: 'center',
                justifyContent: 'center'
            }} >
                <Image
                    resizeMode={'contain'}
                    style={{
                        height: 150,
                        marginBottom: 20,
                    }}
                    source={require("../../../assets/svg/reclamapp-logo.png")}
                />
                        
                <Text style={{
                    paddingHorizontal: 50,
                    paddingBottom: 10,
                    fontSize: 23,
                    textAlign: 'center',
                }}>
                    {'Todos já tiveram alguma decepção com o serviço público, mas poucos sabem ou querem fazer uma reclamação formal na prefeitura.'}
                </Text>
                 <Text style={{
                    paddingHorizontal: 50,
                    fontSize: 23,
                    textAlign: 'center',
                }}>
                    {'Mas nem por isso deveriamos ficar calados!'}
                </Text>
             </View>

        </View>
    </View>
    );
}