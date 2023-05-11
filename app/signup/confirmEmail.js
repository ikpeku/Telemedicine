import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { Stack, useSearchParams, useRouter } from 'expo-router'
import { useForm } from "react-hook-form";
import Input from '../../static/Input';
import Button from '../../static/Button';
import { Auth } from 'aws-amplify';
import { Snackbar } from 'react-native-paper';

const confirmEmail = () => {
    const router = useRouter()
    const { email } = useSearchParams()
    const [visible, setVisible] = React.useState(false);


    const { handleSubmit, control, watch } = useForm({
        defaultValues: {
            Email: email,
            code: "",
        }
    });


    const user = watch("Email")


    const onSubmit = async (data) => {
        try {
            await Auth.confirmSignUp(data.Email, data.code)
            router.push("/signup/login")
        } catch (error) {
            Alert.alert("Error", error.message)

        }
    }

    const HandleResend = async () => {
        try {
            await Auth.resendSignUp(user)
            setVisible(true)
        } catch (error) {
            Alert.alert("Error", error.message)

        }
    }



    return (
        <View style={styles.root}>
            <Stack.Screen options={{ title: "Confirm Your Email", headerTitleAlign: "center", headerTintColor: "#0665CB" }} />

            <Input control={control} label="Email" placeholder="Enter Email" name="Email" rules={{
                required: "This field is required.", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Enter a valid e-mail address',
                }
            }} />

            <Input control={control} label="Confirmation Code" placeholder="Enter your confirmation code" name="code" rules={{
                required: "This field is required."
            }} />


            <Button title="Confirm" onPress={handleSubmit(onSubmit)} />

            <Button title="Resend code" type='secondary' onPress={HandleResend} />

            <Text style={{ textAlign: "right", marginTop: 10 }} onPress={() => router.push("/signup/login")}>Back to Sign In</Text>

            <Snackbar
                visible={visible}
                onDismiss={() => setVisible(false)}
                duration={3000}
                action={{
                    label: 'x',
                    onPress: () => setVisible(false)
                }}>
                Code resend check your email.
            </Snackbar>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
        gap: 10
    }
})

export default confirmEmail