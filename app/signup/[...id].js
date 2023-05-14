import { useCallback, useState, useEffect, useContext } from "react";
import { Text, View, ScrollView, StyleSheet, KeyboardAvoidingView, Platform, Alert, Image } from "react-native";
import { usePathname, useRouter, Stack, Link } from "expo-router";
import Button from "../../static/Button";
import Input from "../../static/Input";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


export default function Sign() {

    const pathname = usePathname();
    const [loading, setLoadig] = useState(false)


    const router = useRouter();
    const { handleSubmit, control, watch } = useForm({
        defaultValues: {
            Full_Name: "",
            Email_Address: "",
            Phone_Number: "",
            Password: ""
        }
    });

    const email = watch("Email_Address")


    const onFormSubmit = async (data) => {
        if (loading) return
        setLoadig(true)


        try {

            if (pathname === "/signup/login") {
                await Auth.signIn(data.Email_Address, data.Password)
                router.replace("/homescreens")
            } else {
                await Auth.signUp({ username: data?.Email_Address, password: data?.Password, attributes: { email: data.Email_Address, phone_number: data?.Phone_Number, name: data.Full_Name }, autoSignIn: { enabled: true } })
                // console.log('home', data.Email_Address)
                router.push({ pathname: "/signup/confirmEmail", params: { email: data.Email_Address } })

            }

            setLoadig(false)

        } catch (error) {
            setLoadig(false)
            if (error.message === "User is not confirmed.") {
                return router.push({ pathname: "/signup/confirmEmail", params: { email: data.Email_Address } })
            }
            Alert.alert("Error", error.message)

        }
    }

    const signin = useCallback(async () => {
        try {
            await Auth.federatedSignIn({ provider: "Google" });
        } catch (error) {
            Alert.alert("Error", error.message)
        }

    }, []);



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


                <View style={{ marginTop: 10 }}>

                    {pathname === "/signup/register" &&
                        <Input control={control} label="Full Name" placeholder="Enter Full Name" name="Full_Name" rules={{ required: "This field is required" }} />
                    }



                    <Input control={control} label="Email Address" placeholder="Enter Email" name="Email_Address" rules={{
                        required: "This field is required.", pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Enter a valid e-mail address',
                        }
                    }} />

                    {pathname === "/signup/register" &&
                        <Input control={control} label="Phone Number" placeholder="Enter Mobile Number" name="Phone_Number" rules={{ required: "This field is required" }} />
                    }

                    <Input control={control} label="Password" placeholder="Enter Password" name="Password"
                        rules={{ required: "This field is required", minLength: { value: 7, message: "password should be atleast 7 characters." } }} passord={true}
                    />
                    <Text style={[styles.cta, { textAlign: "left", color: "#0665CB" }]} onPress={() => router.push({ pathname: "/signup/forgotPassword", params: { email } })} >Forget Password</Text>

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

                <View style={styles.ctaContainer}>
                    <Link href={pathname !== "/signup/login" ? "/doctor" : "/doctor"}>
                        <Text style={styles.ctaBtn}>{pathname !== "/signup/login" ? "Sign Up" : "Sign In"}</Text>
                    </Link>
                    <Text style={styles.cta}> as Doctor</Text>
                </View>

                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                    <Text style={{ color: "rgba(0, 0, 0, 0.5)" }}>or</Text>
                    <View style={styles.line} />
                </View>

                {/* Google btn */}
                <Button
                    title={pathname === "/signup/login" ? "Log In with Google" : "Sign up with Google"}
                    icon={<Image source={require('../../assets/google.png')} style={{ width: 18, height: 18 }} />}
                    type="secondary"
                    onPress={signin}
                />



                {/* </Pressable> */}
            </ScrollView>
            {loading && (
                <View style={[{ flex: 1, alignItems: "center", justifyContent: "center", ...StyleSheet.absoluteFill, backgroundColor: "transparent" }]}>
                    <ActivityIndicator animating={true} size={"large"} color={MD2Colors.greenA700} />
                </View>
            )}
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