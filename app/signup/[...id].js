import { useState } from "react"
import { Text, View, Pressable, ScrollView, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { usePathname } from "expo-router";
import { Feather } from '@expo/vector-icons';
import Button from "../../components/Button";

export default function Sign() {
    const [isvisible, setIsvisible] = useState(false)

    const pathname = usePathname();
    console.log(pathname)

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView>
                <Pressable onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={styles.title}>{pathname === "/signup/login" ? "Welcome back" : "Set up your profile"}</Text>


                        {!pathname === "/signup/login" && <View style={styles.textInputContainer}>
                            <TextInput placeholder="Full Name" style={styles.input} />
                        </View>}

                        <View style={styles.textInputContainer}>
                            <TextInput placeholder="Email Address" style={styles.input} />
                        </View>

                        {!pathname === "/signup/login" && <View style={styles.textInputContainer}>
                            <TextInput placeholder="Phone Number" style={styles.input} />
                        </View>}

                        <View style={[styles.textInputContainer, styles.password]}>
                            <TextInput placeholder="Password" secureTextEntry={isvisible} style={styles.input} />
                            {!isvisible ? <Feather onPress={() => setIsvisible(true)} name="eye-off" size={18} color="rgba(0, 0, 0, 0.35)" style={{ marginLeft: "auto" }} /> :
                                <Feather onPress={() => setIsvisible(false)} name="eye" size={18} color="rgba(0, 0, 0, 0.35)" style={{ marginLeft: "auto" }} />}
                        </View>
                    </View>


                    <Button styleProps={{ width: "70%", alignSelf: "center", marginVertical: 30 }}>
                        <Text style={[styles.cta, { color: "#fff" }]}>{pathname === "/signup/login" ? "Log In" : "Sign up"}</Text>
                    </Button>


                    <View style={styles.ctaContainer}>
                        <Text style={styles.cta}>Already have an account</Text>
                        <Pressable><Text style={styles.ctaBtn}>{!pathname === "/signup/login" ? "Log In" : "Sign up"}</Text></Pressable>
                    </View>

                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                        <Text style={{ color: "rgba(0, 0, 0, 0.5)" }}>or</Text>
                        <View style={styles.line} />
                    </View>

                    <Button styleProps={{ width: "90%", alignSelf: "center", marginVertical: 10, flexDirection: "row" }}>
                        <Image source={require('../../assets/google.png')} resizeMode="contain" />
                        <Text style={[styles.cta, { color: "#fff" }]}>{pathname === "/signup/login" ? "Log In with Google" : "Sign up with Google"}</Text>
                    </Button>

                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>

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