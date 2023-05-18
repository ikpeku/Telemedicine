import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{ headerTitleAlign: "center", headerTintColor: "#0665CB", }}>
            <Stack.Screen name="index" options={{ headerTitle: "Profile" }} />
            <Stack.Screen name="editprofile" options={{ headerTitle: "Edit Profile" }} />
            <Stack.Screen name="password" options={{ headerTitle: "Password" }} />
            <Stack.Screen name="resetpassword" options={{ headerTitle: "Password" }} />
        </Stack>)
}

