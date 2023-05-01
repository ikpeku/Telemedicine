import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useSearchParams } from 'expo-router'

const User = () => {
    const user = useSearchParams()
    console.log(user)
    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />
            <Text>USER </Text>
        </View>
    )
}

export default User

const styles = StyleSheet.create({})