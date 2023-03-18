import { StyleSheet, Text, View, Switch, Pressable } from 'react-native'
import React, { useState } from 'react'
import Button from '../../../components/Button';
import { Feather, Ionicons, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, Link } from "expo-router";

export default function Profile() {
    const router = useRouter();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View >
                    <Text style={styles.title}>Collins Jeff</Text>
                    <Text style={styles.subTitle}>collinsjef655@gmail.com</Text>
                </View>

                <Ionicons name="person-circle" size={24} color="black" />
            </View>

            <View>
                <Link href={{ pathname: "homescreens/Profile/editprofile" }} asChild>
                    <Pressable >
                        <Button bg='#EBF3FB' styleProps={{ width: "90%", alignSelf: "center", marginVertical: 30 }}>
                            <Text style={[styles.cta, { color: "#0665CB", textAlign: "center", fontFamily: "Lato" }]}>Edit Profile</Text>
                        </Button>
                    </Pressable>
                </Link>

            </View>

            <View>
                <Text style={[styles.cta, { paddingHorizontal: 20, paddingBottom: 30 }]}>Settings</Text>
            </View>


            <Link href={{ pathname: "homescreens/Profile/password" }} asChild>
                <Pressable>
                    <View style={styles.switchContainer}>
                        <View style={{ flexDirection: "row", gap: 20, alignItems: "center", }}>

                            <MaterialCommunityIcons name="form-textbox-password" size={20} color="#0665CB" />
                            <Text style={[styles.title, { fontSize: 16 }]}>Password</Text>
                        </View>


                        <Ionicons name="chevron-forward" size={20} color="#0665CB" />

                    </View>
                </Pressable>
            </Link>


            <Link href={{ pathname: "homescreens/Profile/help" }} asChild>
                <Pressable>
                    <View style={styles.switchContainer}>
                        <View style={{ flexDirection: "row", gap: 20, alignItems: "center", }}>

                            <SimpleLineIcons name="earphones-alt" size={20} color="#0665CB" />
                            <Text style={[styles.title, { fontSize: 16 }]}>Help & Support</Text>
                        </View>

                        <Ionicons name="chevron-forward" size={20} color="#0665CB" />
                    </View>
                </Pressable>
            </Link>

            <View style={styles.switchContainer}>
                <View style={{ flexDirection: "row", gap: 20, alignItems: "center", }}>
                    <Feather name="bell" size={20} color="#0665CB" />
                    <Text style={[styles.title, { fontSize: 16 }]}>Notification</Text>
                </View>
                <Switch
                    trackColor={{ false: '#0665CB', true: '#0665CB' }}
                    thumbColor={isEnabled ? '#EBF3FB' : '#EBF3FB'}
                    ios_backgroundColor="#0665CB"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={[styles.switchContainer, { marginTop: "auto" }]}>
                <View style={{ flexDirection: "row", gap: 20, alignItems: "center", }}>

                    {/* <SimpleLineIcons name="earphones-alt" size={20} color="#EA4335" /> */}
                    <Ionicons name="ios-exit-outline" size={24} color="#EA4335" />
                    <Text style={[styles.title, { fontSize: 16, color: "#EA4335" }]}>Sign out</Text>
                </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontFamily: 'Avenir',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 33,
    },
    subTitle: {
        fontFamily: 'Avenir',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 19,
        color: "rgba(0, 0, 0, 0.5)"
    },
    cta: {
        fontFamily: 'Avenir',
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 22,

        color: "rgba(0, 0, 0, 0.5)"
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
        paddingVertical: 13
    }
})