import { Stack } from "expo-router";


const Root = () => {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="user" />
        </Stack>
    )
}


export default Root