import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: "Profile", headerTitleAlign: "center", headerTintColor: "#0665CB", }} />
            <Stack.Screen name="editprofile" options={{ headerTitle: "Edit Profile", headerTintColor: "#0665CB", }} />
            <Stack.Screen name="help" options={{ headerTitle: "Help & Support", headerTintColor: "#0665CB", }} />
            <Stack.Screen name="password" options={{ headerTitle: "Password", headerTintColor: "#0665CB", }} />

        </Stack>)
}