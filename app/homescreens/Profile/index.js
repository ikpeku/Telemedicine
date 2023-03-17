import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View >
                    <Text>Collins Jeff</Text>
                    <Text>collinsjef655@gmail.com</Text>
                </View>

                <Ionicons name="person-circle" size={24} color="black" />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})