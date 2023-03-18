import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Platform, Keyboard, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import Button from '../../../components/Button';
import { TextInput } from "react-native"

export default function password() {
    const [isvisible, setIsvisible] = useState(false)
    const [isvisible2, setIsvisible2] = useState(false)
    const [isvisible3, setIsvisible3] = useState(false)


    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false} >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ paddingBottom: 20 }} >
                <Pressable onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={styles.title}>Change password</Text>
                    </View>

                    <View>
                        <View style={[styles.textInputContainer, styles.password]}>
                            <TextInput placeholder="Old password" secureTextEntry={isvisible} style={styles.input} />
                            {!isvisible ? <Feather onPress={() => setIsvisible(true)} name="eye-off" size={18} color="rgba(0, 0, 0, 0.35)" style={{ marginLeft: "auto" }} /> :
                                <Feather onPress={() => setIsvisible(false)} name="eye" size={18} color="rgba(0, 0, 0, 0.35)" style={{ marginLeft: "auto" }} />}
                        </View>
                    </View>

                    <View>
                        <View style={[styles.textInputContainer, styles.password]}>
                            <TextInput placeholder="New password" secureTextEntry={isvisible} style={styles.input} />
                            {!isvisible2 ? <Feather onPress={() => setIsvisible2(true)} name="eye-off" size={18} color="rgba(0, 0, 0, 0.35)" style={{ marginLeft: "auto" }} /> :
                                <Feather onPress={() => setIsvisible2(false)} name="eye" size={18} color="rgba(0, 0, 0, 0.35)" style={{ marginLeft: "auto" }} />}
                        </View>
                    </View>

                    <View>
                        <View style={[styles.textInputContainer, styles.password]}>
                            <TextInput placeholder="Confirm password" secureTextEntry={isvisible} style={styles.input} />
                            {!isvisible3 ? <Feather onPress={() => setIsvisible3(true)} name="eye-off" size={18} color="rgba(0, 0, 0, 0.35)" style={{ marginLeft: "auto" }} /> :
                                <Feather onPress={() => setIsvisible3(false)} name="eye" size={18} color="rgba(0, 0, 0, 0.35)" style={{ marginLeft: "auto" }} />}
                        </View>
                    </View>

                    <View style={{ paddingBottom: 20 }}>
                        <Button styleProps={{ width: "90%", alignSelf: "center", marginVertical: 30 }}>
                            <Text style={[styles.cta, { color: "#fff" }]}>Save</Text>
                        </Button>
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        </ScrollView>
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
    password: {
        flexDirection: "row",
        alignItems: "center"
    },

    input: {
        height: 40,
        flexGrow: 1,
    },

    cta: {
        fontFamily: 'Avenir',
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 22,

        textAlign: "center",

        color: "rgba(0, 0, 0, 0.5)"
    },

})