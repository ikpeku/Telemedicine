import { Stack } from "expo-router";

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "Home",
};

const Root = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" options={{ headerShown: false }} />
            <Stack.Screen name="Profile" />
            <Stack.Screen name="Users" />
            <Stack.Screen name="Doctors" />
            <Stack.Screen name="Appointment" />
            <Stack.Screen name="Questionnaire" />
        </Stack>
    )
}


export default Root