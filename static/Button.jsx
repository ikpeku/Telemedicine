import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'

const Button = ({ onPress, title, type = "primary", icon }) => {
    return (
        <Pressable onPress={onPress} style={[styles.splashBtnContainer, styles[`btn_${type}`]]}>
            <View style={styles.IconContainer}>
                {icon && <View>{icon}</View>}
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

        borderWidth: StyleSheet.hairlineWidth,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
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
        backgroundColor: "#fff",
        borderColor: "#0665CB",
    },
    btnText_secondary: {
        color: "#0665CB"
    },
    btn_primary: {
        backgroundColor: "#0665CB",
        borderColor: "#0665CB",
    },
    btnText_primary: {
        color: "#fff"
    },
    btn_textiary: {
        backgroundColor: "#fff",
        borderColor: "#1E1E1E",

    },
    btnText_textiary: {
        color: "#0665CB"
    },
    btn_disable: {
        backgroundColor: "#fff",
        borderColor: "rgba(0, 0, 0, 0.8)",

    },
    btnText_disable: {
        color: "rgba(0, 0, 0, 0.8)"
    },
    IconContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10

    }
})