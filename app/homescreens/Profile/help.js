import { Pressable, StyleSheet, Text, View } from 'react-native'
import * as MailComposer from 'expo-mail-composer';
import { FontAwesome5, Feather } from '@expo/vector-icons';

const help = () => {

    const { MailComposerStatus, composeAsync, isAvailableAsync } = MailComposer

    const handleMailto = () => {
        console.log(MailComposerStatus)

    }

    return (
        <View style={styles.container}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
                <Text style={styles.title} >Contact Us</Text>
            </View>
            <Pressable onPress={handleMailto}>
                <View style={styles.textContainer}>
                    <FontAwesome5 name="envelope" size={24} color="#0665CB" />
                    <Text>telemedicine@gmail.com</Text>
                </View>
            </Pressable>
            <View style={styles.textContainer}>
                <Feather name="phone" size={24} color="#0665CB" />
                <Text>+2348124458760</Text>
            </View>
        </View>
    )
}

export default help

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: 'Avenir',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 33,
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
        paddingVertical: 13
    }
})