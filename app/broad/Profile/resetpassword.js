import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { Stack, useSearchParams, useRouter } from 'expo-router'
import { useForm } from "react-hook-form";
// import Input from '../../static/Input';
// import Button from '../../static/Button';
import { Auth } from 'aws-amplify';
import { Button, Input } from '../../../static';


const forgotPassword = () => {
    const router = useRouter()
    const { email } = useSearchParams()
    const [loading, setLoadig] = useState(false)


    const { handleSubmit, control } = useForm({
        defaultValues: {
            Email: email,
        }
    });



    const onSubmit = async (data) => {
        if (loading) return
        setLoadig(true)
        try {
            await Auth.forgotPassword(data.Email)
            // router.push({ pathname: "/signup/confirmForgotPassword", params: { email: data.Email } })
            router.push({ params: { email: data.Email }, pathname: "./Profile/password" })
        } catch (error) {
            Alert.alert("Error", error.message)

        } finally {
            setLoadig(false)
        }
    }




    return (
        <View style={styles.root}>
            <Stack.Screen options={{ title: "Forgot password", headerTintColor: "#0665CB" }} />

            <Input control={control} label="Email Address" placeholder="Enter Email" name="Email" rules={{
                required: "This field is required.", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Enter a valid e-mail address',
                }
            }} />

            <Button title="Reset password" onPress={handleSubmit(onSubmit)} />

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

export default forgotPassword