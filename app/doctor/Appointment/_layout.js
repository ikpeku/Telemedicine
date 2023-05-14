import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{ headerTitleAlign: "center", headerTintColor: "#0665CB", }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="appointment" />
            <Stack.Screen name="checkout" />
            <Stack.Screen name="confirmAppointment" />
        </Stack>
    )
}