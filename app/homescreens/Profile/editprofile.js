import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../../components/Button'

export default function editprofile() {
    return (
        <View style={styles.container}>

            <View style={styles.textInputContainer}>
                <TextInput placeholder="Full Name" style={styles.input} />
            </View>

            <View style={styles.textInputContainer}>
                <TextInput placeholder="Email Address" style={styles.input} />
            </View>

            <View style={styles.textInputContainer}>
                <TextInput placeholder="Phone Number" style={styles.input} />
            </View>

            <View>
                <Button styleProps={{ width: "90%", alignSelf: "center", marginVertical: 30 }}>
                    <Text style={[styles.cta, { color: "#fff" }]}>Save</Text>
                </Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 30
    },
    title: {
        fontFamily: 'Avenir',
        fontSize: 32,
        lineHeight: 44,
        color: "#0665CB",
        fontWeight: "500"
    },
    textInputContainer: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.08)",
        marginVertical: 24
    },
    input: {
        height: 40,
        flexGrow: 1,
    },
    password: {
        flexDirection: "row",
        alignItems: "center"
    },
    cta: {
        fontFamily: 'Avenir',
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 22,

        textAlign: "center",

        color: "rgba(0, 0, 0, 0.5)"
    },
    ctaContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    ctaBtn: {
        fontFamily: 'Avenir',
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 22,
        color: "#0665CB"

    },
    line: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexGrow: 1,
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderWidth: 1

    },
    lineContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginVertical: 40

    },

})