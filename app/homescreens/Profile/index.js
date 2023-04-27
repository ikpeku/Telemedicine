import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Feather, Ionicons, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { Avatar, Switch } from 'react-native-paper';
import Button from '../../../static/Button';
import CardTag from '../../../components/CardTag';

export default function Profile() {


    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const Item = ({ path, leftIcon, rightIcon, title, signout = false }) => {
        return (
            <Link href={{ pathname: path }} asChild>
                <Pressable>
                    <View style={[styles.switchContainer, signout ? {} : { borderTopWidth: StyleSheet.hairlineWidth }]}>
                        <View style={{ flexDirection: "row", gap: 20, alignItems: "center", }}>

                            {leftIcon}
                            <Text style={[styles.title, { fontSize: 16 }, signout ? { color: "#EA4335" } : {}]}>{title}</Text>
                        </View>


                        {rightIcon}

                    </View>
                </Pressable>
            </Link>
        )
    }


    return (
        <View style={styles.container}>
            <CardTag
                title="Collins Jeff"
                subTitle="collinsjef655@gmail.com"
                url="https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/Mid-Adult-Female-Entrepreneur-With-Arms-Crossed-/960x0.jpg?format=jpg&width=960"
                rightIcon={<Avatar.Image size={24} source={require('../../../assets/profileIcon.png')}
                    style={{ backgroundColor: "#fff" }} />}
            />


            <View style={{ padding: 10 }}>
                <Link href={{ pathname: "homescreens/Profile/editprofile" }} asChild>
                    <Button title="Edit Profile" type='textiary' />

                </Link>
            </View>


            <View>
                <Text style={[styles.cta, { paddingHorizontal: 10, paddingBottom: 30, marginTop: 20 }]}>Settings</Text>
            </View>


            {/* Password */}
            <Item
                title="Password"
                leftIcon={<MaterialCommunityIcons name="form-textbox-password" size={20} color="#0665CB" />}
                rightIcon={<Ionicons name="chevron-forward" size={20} color="#0665CB" />}
                path="homescreens/Profile/password"
            />


            {/* help */}
            <Item
                title="Help & Support"
                leftIcon={<SimpleLineIcons name="earphones-alt" size={20} color="#0665CB" />}
                rightIcon={<Ionicons name="chevron-forward" size={20} color="#0665CB" />}
                path="homescreens/Profile/help"
            />

            {/* Subscribe */}

            <Item
                title="Subscribe"
                leftIcon={<Feather name="arrow-up-circle" size={24} color="#0665CB" />}
                rightIcon={<Ionicons name="chevron-forward" size={20} color="#0665CB" />}
                path="homescreens/Profile/Subscribe"
            />

            {/* Notification */}
            <Item
                title="Notification"
                leftIcon={<Feather name="bell" size={20} color="#0665CB" />}
                rightIcon={<Switch color='#0665CB' value={isSwitchOn} onValueChange={onToggleSwitch} />}
            />



            {/* Exit */}
            <View style={[{ marginTop: "auto" }]}>
                <Item
                    title="Sign out"
                    leftIcon={<Ionicons name="ios-exit-outline" size={24} color="#EA4335" />}
                    signout={true}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
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
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 22,

        color: "#000"
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,

        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(0, 0, 0, 0.1)",
        paddingVertical: 13
    }
})