import React from 'react'
import { StyleSheet, View, ScrollView, Image } from 'react-native'
import { Stack, useSearchParams, useRouter } from 'expo-router'
import { DATA } from '../../../components/data'
import { Card, Text, Avatar } from 'react-native-paper'
import Button from '../../../static/Button'
import { Ionicons } from '@expo/vector-icons';


const User = () => {
    const { id } = useSearchParams()
    const router = useRouter()

    const currentUser = DATA.filter(user => user.id === id)

    if (!currentUser[0]) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Article not found</Text>

            </View>
        )
    }



    const TreatmentCard = ({ source, title, text }) => (

        <Card>
            <Card.Content style={{ gap: 10 }}>
                <Avatar.Image size={70} source={source} />
                <Text style={[styles.text, { fontWeight: "bold", }]} variant='titleMedium'>{title}</Text>
                <Text style={[styles.text,]} variant='bodyLarge'>{text}</Text>
            </Card.Content>
        </Card>
    )



    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <Stack.Screen options={{ headerShown: false }} />

            {currentUser[0]?.photos !== "" && <Image style={styles.banner} src={currentUser[0]?.photos} />}
            {currentUser[0]?.photos === "" && <Image style={{ width: "100%" }} source={require("../../../assets/drugs.png")} resizeMode='cover' />}
            <Ionicons style={styles.icon} name="chevron-back" size={30} color="white" onPress={() => router.back()} />


            <View style={{ padding: 10 }}>


                <Text style={[styles.text, { fontWeight: "bold", marginVertical: 20 }]} variant='titleLarge'>About {currentUser[0]?.title.toLocaleLowerCase()}</Text>

                {currentUser[0]?.detail && <Text variant='bodyLarge'>{currentUser[0]?.detail}</Text>}

                <Text style={[styles.text, { fontWeight: "bold", textAlign: "center", marginVertical: 20 }]} variant='titleLarge'>Treatment for anxiety in 3 easy steps</Text>

                <View style={{ gap: 20 }}>
                    <TreatmentCard
                        title="Let us know how you’ve been feeling"
                        text="We want to understand your experience so we can provide the best treatment."
                        source={require("../../../assets/homeDetail1.png")} />

                    <TreatmentCard
                        title="Wait for your result to be examined by our experienced doctors"
                        text="We want to understand your experience so we can provide the best treatment."
                        source={require("../../../assets/homeDetail2.png")} />

                    <TreatmentCard
                        title="Make payment and get your treatment and prescription"
                        text="We want to understand your experience so we can provide the best treatment."
                        source={require("../../../assets/homeDetail3.png")} />
                </View>

                <View style={{ marginTop: 50 }}>

                    <Button onPress={() => router.push({ pathname: "./questionnaire", params: { id } })} title="Get started" />
                </View>

            </View>

        </ScrollView>
    )
}

export default User

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Avenir'
    },
    banner: {
        width: "100%",
        aspectRatio: 4 / 3
    },
    icon: {
        position: "absolute",
        top: 40,
        left: 10
    }
})