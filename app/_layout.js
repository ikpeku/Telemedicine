import { useState, useEffect, useCallback } from "react"
import { SplashScreen } from "expo-router";
import { Text, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useFonts } from 'expo-font';
import { Provider as PaperProvider } from 'react-native-paper';
import { Amplify } from "aws-amplify";
import config from "../src/aws-exports"
Amplify.configure(config)
import { UserContext } from "../Context/UserProvider";

SplashScreen.preventAutoHideAsync();

const App = () => {
    const router = useRouter();
    const [isReady, setReady] = useState(false);

    const [fontsLoaded] = useFonts({
        'Lato': require('../assets/Lato/Lato-Black.ttf'),
        'Nunito': require('../assets/Nunito/static/Nunito-Black.ttf'),
        'Avenir': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
    });



    useEffect(() => {
        // Perform some sort of async data or asset fetching.
        setTimeout(() => {
            setReady(true);
        }, 1000);
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }


    if (!isReady) return <SplashScreen />





    return (

        <PaperProvider onLayout={onLayoutRootView}>
            <UserContext>
                <Stack screenOptions={{ headerShadowVisible: false, headerStyle: { backgroundColor: "#fff" }, title: "", headerBackVisible: false, animation: "slide_from_right" }}>
                    <Stack.Screen name='index' />
                    <Stack.Screen name='onboarding1' options={{ headerRight: () => <Text style={styles.skip} onPress={() => router.push("onboarding3")}>Skip</Text> }} />
                    <Stack.Screen name='onboarding2' options={{ headerRight: () => <Text style={styles.skip} onPress={() => router.push("onboarding3")}>Skip</Text> }} />
                    <Stack.Screen name='onboarding3' />

                    <Stack.Screen name='homescreens' options={{ headerShown: false }} />
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