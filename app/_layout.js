import { Text, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Provider as PaperProvider } from 'react-native-paper';



const App = () => {
    const router = useRouter();

    return (
        <PaperProvider>
            <Stack screenOptions={{ headerShadowVisible: false, headerStyle: { backgroundColor: "#fff" }, title: "", headerBackVisible: false, animation: "slide_from_right" }}>
                <Stack.Screen name='index' options={{ headerRight: () => <Text style={styles.skip} onPress={() => router.push("onboarding3")}>Skip</Text> }} />
                <Stack.Screen name='onboarding2' options={{ headerRight: () => <Text style={styles.skip} onPress={() => router.push("onboarding3")}>Skip</Text> }} />
                <Stack.Screen name='onboarding3' />
                <Stack.Screen name='homescreens' options={{ headerShown: false }} />
            </Stack>
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