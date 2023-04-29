import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Card } from 'react-native-paper';

const CardTag = ({ mode = "contained", rightIcon, title, subTitle, url, elevation, onPress }) => {
    return (
        <Card onPress={onPress} mode={mode} style={[{ backgroundColor: "#fff" }, mode === "elevated" ? { marginBottom: 4, marginTop: 2, marginHorizontal: 3 } : {}]} elevation={elevation} >
            <Card.Content style={styles.header}>
                <View style={styles.headerContainer}>
                    <Avatar.Image size={40}
                        source={{ uri: url }} />

                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>


                </View>

                {rightIcon}
            </Card.Content>
        </Card >
    )
}

export default CardTag

const styles = StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }, headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    title: {
        fontFamily: 'Avenir',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 33,
    },
    subTitle: {
        fontFamily: 'Avenir',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 19,
        color: "rgba(0, 0, 0, 0.5)"
    },
})