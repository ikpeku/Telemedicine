import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

const ProfileAvatar = ({ text, photoUrl }) => (
    <View style={styles.avatarContainer}>

        <Avatar.Image size={100} source={{ uri: photoUrl }} />
        {text && <Text variant='bodySmall' style={{ paddingVertical: 10 }}>{text}</Text>}
    </View>
);
export default ProfileAvatar


const styles = StyleSheet.create({
    avatarContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    }

})