import { Stack } from "expo-router";

export default function Layout() {
    return <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="confirm" options={{ headerShown: false }} />
        <Stack.Screen name="questionnaire" options={{ title: "AI Questionnaire", headerTitleAlign: "center", headerTintColor: "#0665CB", }} />
    </Stack>
}