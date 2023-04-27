import { Stack } from "expo-router";

export default function Layout() {
    return <Stack screenOptions={{
        title: "Notifications",
        headerTintColor: "#0665CB",
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontFamily: 'Avenir',
            fontWeight: 900,
            fontSize: 20,
        }
    }} />
}