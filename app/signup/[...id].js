import { useState } from "react"
import { Text, View, Pressable, ScrollView, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Keyboard, Image } from "react-native";
import { usePathname, useRouter, Stack, Link } from "expo-router";
import { Feather } from '@expo/vector-icons';
import Button from "../../static/Button";
import { useForm } from "react-hook-form";
import Input from "../../static/Input";

export default function Sign() {
    const pathname = usePathname();

    const router = useRouter();
    const { handleSubmit, control } = useForm({
        defaultValues: {
            Full_Name: "",
            Email_Address: "",
            Phone_Number: "",
            Password: ""
        }
    });


    const onFormSubmit = (data) => {
        console.log(data)
    }

    // style={{ paddingBottom: 20 }}
    // contentContainerStyle={{ paddingBottom: 30 }}

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  >
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                <Stack.Screen
                    options={{
                        title: pathname === "/signup/login" ? "Welcome back" : "Set up your profile",
                        headerTintColor: "#0665CB", headerLargeTitleStyle: styles.title,
                        headerTitleStyle: styles.title, headerBackVisible: false,
                        headerShadowVisible: false
                    }} />


                {/* <Pressable onPress={Keyboard.dismiss}> */}


                <View style={{ marginTop: 10 }}>

                    {pathname === "/signup/register" &&
                        <Input control={control} label="Full Name" placeholder="Enter Full Name" name="Full_Name" rules={{ required: "Required" }} />
                    }



                    <Input control={control} label="Email Address" placeholder="Enter Email" name=" Email_Address" rules={{ required: "Required" }} />

                    {pathname === "/signup/register" &&
                        <Input control={control} label="Phone Number" placeholder="Enter Mobile Number" name="Phone_Number" rules={{ required: "Required" }} />
                    }

                    <Input control={control} label="Password" placeholder="Enter Password" name="Password" rules={{ required: "Required" }} passord={true} />

                    {/* {pathname === "/signup/register" &&
                            <View style={styles.textInputContainer}>
                                <TextInput placeholder="Full Name" style={styles.input} />
                            </View>} */}

                    {/* <View style={styles.textInputContainer}>
                            <TextInput placeholder="Email Address" style={styles.input} />
                        </View> */}


                    {/* {pathname === "/signup/register" && <View style={styles.textInputContainer}>
                            <TextInput placeholder="Phone Number" style={styles.input} />
                        </View>} */}

                    {/* <View style={[styles.textInputContainer, styles.password]}>
                            <TextInput placeholder="Password" secureTextEntry={isvisible} style={styles.input} />
                            {!isvisible ? <Feather onPress={() => setIsvisible(true)} name="eye-off" size={18} color="rgba(0, 0, 0, 0.35)" style={{ marginLeft: "auto" }} /> :
                                <Feather onPress={() => setIsvisible(false)} name="eye" size={18} color="rgba(0, 0, 0, 0.35)" style={{ marginLeft: "auto" }} />}
                        </View> */}
                </View>


                {/*  Sinup btn*/}
                <View style={{ width: "80%", alignSelf: "center", marginVertical: 30 }}>
                    <Button onPress={handleSubmit(onFormSubmit)} title={pathname === "/signup/login" ? "Log In" : "Sign up"} />
                </View>




                <View style={styles.ctaContainer}>
                    <Text style={styles.cta}>Already have an account</Text>
                    <Link href={pathname === "/signup/login" ? "/signup/register" : "/signup/login"}>
                        <Text style={styles.ctaBtn}>{pathname === "/signup/login" ? "Sign Up" : "Sign In"}</Text>
                    </Link>
                </View>

                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                    <Text style={{ color: "rgba(0, 0, 0, 0.5)" }}>or</Text>
                    <View style={styles.line} />
                </View>

                {/* Google btn */}
                <Button
                    title={pathname === "/signup/login" ? "Log In with Google" : "Sign up with Google"}
                    icon={true}
                    type="secondary"
                    onPress={() => router.push("/homescreens/")}
                />


                {/* </Pressable> */}
            </ScrollView>
        </KeyboardAvoidingView>

    )




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#fff"
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
        justifyContent: "center",
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