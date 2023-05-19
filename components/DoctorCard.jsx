import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper';
import { Button } from '../static';

const DoctorCard = ({ title, rightIcon, subTitle, isDoctor = false }) => {
    return (
        <Card style={styles.header}>
            <Card.Content >
                <View style={[styles.headerContainer, { paddingBottom: 5 }]}>
                    <Text variant='titleMedium' style={[styles.title, { color: "white" }]}>{title}</Text>
                    {rightIcon}
                </View>
                <View style={styles.headerContainer}>
                    <Text variant='headlineMedium' style={[styles.title, { paddingVertical: 5, color: "white" }]}>{subTitle}</Text>

                    {isDoctor && < TouchableOpacity onPress={() => { }}>
                        <Text style={[styles.title,
                        { color: "#0665CB", backgroundColor: "white", borderRadius: 15, paddingVertical: 10, paddingHorizontal: 18 }]}>+ Invite Doctor</Text>
                    </TouchableOpacity>}
                </View>
            </Card.Content>
        </Card >
    )
}

export default DoctorCard


const styles = StyleSheet.create({
    header: {
        // padding: 20,
        // flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center"
        backgroundColor: "#0665CB",
        flexGrow: 1,
        // flexShrink: 1,
        width: "100%",
        flex: 1
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        gap: 5
    },
    title: {
        fontFamily: 'Avenir',

    },
})