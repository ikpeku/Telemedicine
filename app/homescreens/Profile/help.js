import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Feather } from '@expo/vector-icons';

const help = () => {
    return (
        <View>
            <View>
                <Text>Contact Us</Text>
            </View>

            <View>
                <FontAwesome5 name="envelope" size={24} color="#0665CB" />
                <Text>telemedicine@gmail.com</Text>
            </View>

            <View>
                <Feather name="phone" size={24} color="#0665CB" />
                <Text>+2348124458760</Text>
            </View>
        </View>
    )
}

export default help

const styles = StyleSheet.create({})