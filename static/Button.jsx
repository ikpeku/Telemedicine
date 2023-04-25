import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'

const Button = ({ onPress, title, type = "primary", icon = false }) => {
    return (
        <Pressable onPress={onPress} style={[styles.splashBtnContainer, styles[`btn_${type}`]]}>
            <View style={styles.IconContainer}>
                {icon && <Image source={require('../assets/google.png')} style={{ width: 18, height: 18 }} />}
                <Text style={[styles.BtnText, styles[`btnText_${type}`]]}>{title}</Text>
            </View>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    splashBtnContainer: {
        width: "100%",
        borderRadius: 8,
        borderColor: "#0665CB",
        borderWidth: StyleSheet.hairlineWidth,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        // marginTop: 50,
        // // marginHorizontal: 20
        paddingVertical: 15

    },
    BtnText: {
        // color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 22,
        fontFamily: "Lato",
        textAlign: "center",
    },
    btn_secondary: {
        backgroundColor: "#fff"
    },
    btnText_secondary: {
        color: "#0665CB"
    },
    btn_primary: {
        backgroundColor: "#0665CB",
    },
    btnText_primary: {
        color: "#fff"
    },
    IconContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10

    }
})