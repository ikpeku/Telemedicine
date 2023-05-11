import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { Stack, useSearchParams, useRouter } from 'expo-router'
import { useForm } from "react-hook-form";
import Input from '../../static/Input';
import Button from '../../static/Button';
import { Auth } from 'aws-amplify';

const ConfirmForgotPassword = () => {
    const router = useRouter()
    const { email } = useSearchParams()
    const [loading, setLoadig] = useState(false)

    const { handleSubmit, control, watch } = useForm({
        defaultValues: {
            Email: email,
            Confirm_Password: "",
            Password: "",
            code: ""
        }
    });


    const password = watch("Password")


    const onSubmit = async (data) => {
        if (loading) return
        setLoadig(true)
        try {
            await Auth.forgotPasswordSubmit(data.Email, data.code, data.Password,)
            router.push("/signup/login")
        } catch (error) {
            Alert.alert("Error", error.message)

        } finally {
            setLoadig(false)
        }
    }



    return (
        <View style={styles.root}>
            <Stack.Screen options={{ title: "Reset password", headerTintColor: "#0665CB" }} />

            <Input control={control} label="Confirmation Code" placeholder="Enter your confirmation code from your email" name="code" rules={{
                required: "This field is required."
            }} />

            <Input control={control} label="Password" placeholder="Enter Password" name="Password"
                rules={{ required: "This field is required", minLength: { value: 7, message: "password should be atleast 7 characters." } }} passord={true}
            />
            <Input control={control} label="Confirm Password" placeholder="Confirm Password" name="Confirm_Password"
                rules={{
                    required: "This field is required",
                    minLength: {
                        value: 7, message: "password should be atleast 7 characters."
                    },
                    validate: value => value === password || "password do not match"
                }} passord={true}
            />


            <Button title="Change" onPress={handleSubmit(onSubmit)} />

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

export default ConfirmForgotPassword