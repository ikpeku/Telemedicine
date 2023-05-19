import { Stack } from "expo-router";


const Root = () => {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="doctor" options={{ title: "Doctor’s details", headerTitleAlign: "center", headerTintColor: "#0665CB", }} />
            <Stack.Screen name="adminsuccess" options={{ headerShown: false }} />
        </Stack>
    )
}


export default Root