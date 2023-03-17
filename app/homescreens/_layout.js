import { Tabs } from "expo-router";
import { MaterialCommunityIcons, SimpleLineIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';


export default function Layout() {


    return (<Tabs screenOptions={{ headerShown: false, tabBarInactiveTintColor: "#000", tabBarLabelStyle: { fontSize: 13, fontWeight: "500" } }}>
        <Tabs.Screen name="Home" options={{ tabBarIcon: ({ size, color }) => <FontAwesome name="hospital-o" size={size} color={color} /> }} />
        <Tabs.Screen name="Consultation" options={{ tabBarIcon: ({ size, color, focused }) => <MaterialCommunityIcons name="plus-outline" size={size} color={color} /> }} />
        <Tabs.Screen name="Notification" options={{ tabBarIcon: ({ size, color }) => <SimpleLineIcons name="bell" size={size} color={color} /> }} />
        <Tabs.Screen name="Profile" options={{ tabBarIcon: ({ size, color }) => <MaterialIcons name="person-outline" size={size} color={color} /> }} />
    </Tabs>)
}   