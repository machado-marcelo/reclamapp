import { Icon, Input } from "react-native-elements"
import { TextInput, View } from "react-native"

import React from "react"

export const CustomTextInput = (
    {
        iconLeft,
        iconRight,
        placeholder = "",
        secureTextEntry = false,
        value,
        onChageValue
    }: {
        iconLeft? : JSX.Element,
        iconRight? : JSX.Element,
        placeholder? : string,
        secureTextEntry? : boolean,
        value: string,
        onChageValue: (newValue: string) => void}
    ) => {
    
    
    return(
        <Input
        placeholder={placeholder}
        leftIcon={iconLeft}
        rightIcon={iconRight}
        onChangeText={onChageValue}
        inputContainerStyle={{
            marginHorizontal: 0,
            borderWidth:1,
            borderRadius:10,
        }}
        secureTextEntry={secureTextEntry}
        value={value}
        
    />
    ); 
}
