import { StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView, Platform, Pressable, Keyboard } from 'react-native'
import React from 'react'
import Button from '../../../components/Button'

export default function editprofile() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false} >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ paddingBottom: 20 }} >
                <Pressable onPress={Keyboard.dismiss}>
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
                </Pressable>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 10
    },

    textInputContainer: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.08)",
        marginVertical: 20
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