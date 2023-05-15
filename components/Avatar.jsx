import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

const ProfileAvatar = ({ text, photoUrl, type = "Center" }) => (
    <View style={styles[`avatar${type}`]}>

        <Avatar.Image size={type === "Center" ? 100 : 50} source={{ uri: photoUrl }} />
        {text && <Text variant={type === "Center" ? 'bodySmall' : "headlineMedium"} style={{ paddingVertical: 10 }}>{text}</Text>}
    </View>
);
export default ProfileAvatar


const styles = StyleSheet.create({
    avatarCenter: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    avatarStart: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10

    }

})