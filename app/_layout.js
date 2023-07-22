import { Text, StyleSheet, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Provider as PaperProvider } from 'react-native-paper';
import { Amplify } from "aws-amplify";
import awsmobile from "../src/aws-exports"
import { UserContext } from "../Context/UserProvider";

Amplify.configure(awsmobile)


const App = () => {
    const router = useRouter();


    return (

        <PaperProvider >
            <UserContext>
                <Stack screenOptions={{ headerShadowVisible: false, headerStyle: { backgroundColor: "#fff" }, title: "", headerBackVisible: false, animation: "slide_from_right" }}>
                    <Stack.Screen name='index' />
                    <Stack.Screen name='onboarding1' options={{ 
                     headerLeft: () => <Image source={require('../assets/logo.png')} style={{}} />
                     
                     }} />
                    <Stack.Screen name='homescreens' options={{ headerShown: false }} />
                    <Stack.Screen name='doctor' options={{ headerShown: false }} />
                    <Stack.Screen name='broad' options={{ headerShown: false }} />
                </Stack>
            </UserContext>
        </PaperProvider>

    )
}

export default App

const styles = StyleSheet.create({
    skip: {
        color: "#0665CB",
        fontFamily: 'Nunito',
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 22
    }
})