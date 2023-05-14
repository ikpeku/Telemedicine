import { Text, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Provider as PaperProvider } from 'react-native-paper';
import { Amplify } from "aws-amplify";
import config from "../src/aws-exports"
import { UserContext } from "../Context/UserProvider";

Amplify.configure(config)


const App = () => {
    const router = useRouter();


    return (

        <PaperProvider >
            <UserContext>
                <Stack screenOptions={{ headerShadowVisible: false, headerStyle: { backgroundColor: "#fff" }, title: "", headerBackVisible: false, animation: "slide_from_right" }}>
                    <Stack.Screen name='index' />
                    <Stack.Screen name='onboarding1' options={{ headerRight: () => <Text style={styles.skip} onPress={() => router.push("onboarding3")}>Skip</Text> }} />
                    <Stack.Screen name='onboarding2' options={{ headerRight: () => <Text style={styles.skip} onPress={() => router.push("onboarding3")}>Skip</Text> }} />
                    <Stack.Screen name='onboarding3' />
                    <Stack.Screen name='homescreens' options={{ headerShown: false }} />
                    <Stack.Screen name='doctor' options={{ headerShown: false }} />
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