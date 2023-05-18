import { Stack } from "expo-router";


const Root = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            {/* <Stack.Screen name="Profile" /> */}
        </Stack>
    )
}


export default Root