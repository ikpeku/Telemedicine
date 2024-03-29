import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Feather, Ionicons, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";
import { Avatar, Switch, Text } from 'react-native-paper';
import Button from '../../../static/Button';
import CardTag from '../../../components/CardTag';
import { Auth } from 'aws-amplify';
import { userProvider } from '../../../Context/UserProvider';
import { Exit } from '../../../assets';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


const Profile = () => {
    const { user } = useContext(userProvider)
    const [loading, setLoadig] = useState(false)

    const router = useRouter()

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const Item = ({ path, leftIcon, rightIcon, title, signout = false, onPress, params }) => {
        return (
            <Link href={{ pathname: path, params: params }} asChild>
                <Pressable onPress={onPress}>
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


    const HandleSignout = async () => {
        if (loading) return
        setLoadig(true)

        await Auth.signOut()
        setLoadig(false)
    }

    // console.log(user?.attributes?.email)

    const HandlePassword = async () => {
        await Auth.forgotPassword(user?.attributes?.email)
    }

    useEffect(() => {
        if (!user) {
            router.replace("/signup/login")
        }
    }, [user])


    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", alignItems: "center", padding: 15, gap: 10, paddingBottom: 30 }}>

                <Avatar.Image size={40}
                    source={{ uri: "https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/Mid-Adult-Female-Entrepreneur-With-Arms-Crossed-/960x0.jpg?format=jpg&width=960" }} />
                <Text variant='titleMedium'>{user?.attributes?.name}</Text>
                <Avatar.Image size={24} source={require('../../../assets/profileIcon.png')}
                    style={{ backgroundColor: "#fff", marginLeft: "auto" }} />
            </View>

            {/* Account */}
            <Item
                title="Account"
                leftIcon={<Feather name="user" size={20} color="#0665CB" />}
                rightIcon={<Ionicons name="chevron-forward" size={20} color="#0665CB" />}
                onPress={HandlePassword}
                path={"homescreens/Profile/editprofile"}
            // params={{ email: user?.attributes?.email }}
            />


            {/* Password */}
            <Item
                title="Password"
                leftIcon={<MaterialCommunityIcons name="form-textbox-password" size={20} color="#0665CB" />}
                rightIcon={<Ionicons name="chevron-forward" size={20} color="#0665CB" />}
                onPress={HandlePassword}
                path={"homescreens/Profile/password"}
                params={{ email: user?.attributes?.email }}
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
            <Pressable onPress={() => HandleSignout()} style={[{ marginTop: "auto" }]}>
                <Item
                    title="Sign out"
                    leftIcon={<Exit color="#EA4335" />}
                    signout={true}
                    onPress={() => HandleSignout()}
                />
            </Pressable>

            {loading && (
                <View style={[{ flex: 1, alignItems: "center", justifyContent: "center", ...StyleSheet.absoluteFill, backgroundColor: "transparent" }]}>
                    <ActivityIndicator animating={true} size={"large"} color={MD2Colors.greenA700} />
                </View>
            )}

        </View>
    )
}

export default Profile

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
    // cta: {
    //     fontFamily: 'Avenir',
    //     fontWeight: "500",
    //     fontSize: 16,
    //     lineHeight: 22,

    //     color: "#000"
    // },
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