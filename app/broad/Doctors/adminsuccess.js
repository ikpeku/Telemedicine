import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useRouter, useNavigation, useSearchParams } from 'expo-router'
import { Button } from '../../../static'
import { Text } from 'react-native-paper'

const Done = () => {
    const route = useRouter()
    const navigate = useNavigation()
    const { type } = useSearchParams()

    return (
        <View style={styles.root}>
            <View style={{ flex: 1, flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../../../assets/success.png")} style={{ width: 50, aspectRatio: 1 }} />

                {type === "invite" && <Text variant='titleLarge' style={{ color: "#0665CB", textAlign: "center", fontFamily: "Avenir", paddingVertical: 5 }}>You’ve successfully sent an invite</Text>}

                {type === "remove" && <Text variant='titleLarge' style={{ color: "#0665CB", textAlign: "center", fontFamily: "Avenir", paddingVertical: 5 }}>You’ve successfully removed this doctor</Text>}
                {type === "invite" && <Text variant='bodyLarge' style={{ color: "#000000", textAlign: "center", fontFamily: "Avenir", }}>You will be able to see the doctor’s details once they set up their account</Text>}
            </View>

            <Button onPress={() => navigate.popToTop()} title={"Done"} />
        </View>
    )
}

export default Done

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
    }
})