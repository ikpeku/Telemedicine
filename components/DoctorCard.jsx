import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper';

const DoctorCard = ({ title, rightIcon, subTitle }) => {
    return (
        <Card style={styles.header}>
            <Card.Content >
                <View style={styles.headerContainer}>
                    <Text variant='titleMedium' style={styles.title}>{title}</Text>
                    {rightIcon}
                </View>

                <Text variant='headlineMedium' style={[styles.title, { paddingVertical: 5 }]}>{subTitle}</Text>
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
        color: "white"
    },
})