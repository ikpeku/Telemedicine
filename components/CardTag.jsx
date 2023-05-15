import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper';

const CardTag = ({ mode = "contained", rightIcon, title, subTitle, url, elevation, onPress }) => {
    return (
        <Card onPress={onPress} mode={mode} style={[{ backgroundColor: "#fff" }, mode === "elevated" ? { marginBottom: 4, marginTop: 4, marginHorizontal: 3 } : {}]} elevation={elevation} >
            <Card.Content style={styles.header}>
                <View style={styles.headerContainer}>
                    <Avatar.Image size={40}
                        source={{ uri: url }} />

                    <View>
                        <Text variant='titleLarge' style={styles.title}>{title}</Text>
                        <Text variant='bodyMedium' style={[styles.title, styles.subTitle]}>{subTitle}</Text>
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
    },
    subTitle: {
        color: "rgba(0, 0, 0, 0.5)"
    },
})