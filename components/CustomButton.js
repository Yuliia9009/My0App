import React from "react"
import { Text, StyleSheet, TouchableOpacity } from 'react-native'



const CustomButton = ({title, onPress}) =>{
    return(
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    )
}



const style = StyleSheet.create({
    button:{
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text:{
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold',
    },
})


export default CustomButton