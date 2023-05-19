import { Stack } from "expo-router";


const Root = () => {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}


export default Root