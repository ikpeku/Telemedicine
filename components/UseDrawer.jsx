import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Drawer, Text } from 'react-native-paper';
import { Appointment, Candle, Exit, Questionnaire, Users } from '../assets';
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Auth } from 'aws-amplify';
import { useRouter } from 'expo-router';


const DrawerItem = ({ label, active, onPress, disabled, icon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ paddingVertical: 15, flexDirection: "row", alignItems: "center", gap: 20, backgroundColor: active ? "white" : "#0665CB", paddingHorizontal: 15, borderRadius: 20 }}>
            {icon}
            <Text variant='titleMedium' style={{ color: !active ? disabled ? "rgba(255, 255, 255, 0.5)" : "white" : "#0665CB" }} >{label}</Text>
        </TouchableOpacity>
    )
}


const UseDrawer = ({ active = "", setShowDrawer }) => {
    const router = useRouter()

    const HandleSignout = async () => {
        // await Auth.signOut()
        router.replace("/onboarding3")


    }


    return (
        <View style={styles.drawer}>

            <Drawer.Section title="" style={{ backgroundColor: "#0665CB", width: "60%", flex: 1, paddingTop: 50, paddingHorizontal: 10, position: "relative" }} showDivider={false}>


                <DrawerItem
                    label="Overview"
                    active={active === 'Overview'}
                    disabled={true}
                    icon={<Candle />}
                    onPress={() => {

                        router.push("broad/Home")
                        setShowDrawer(false)
                        // navigate.navigate("Home")
                    }}
                />

                <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                    <MaterialIcons name="cancel" size={24} color="white" style={{ marginRight: -70, marginTop: -30 }} onPress={() => {
                        setShowDrawer(false)
                    }} />
                </View>




                <DrawerItem
                    label="Users"
                    active={active === 'Users'}
                    onPress={() => {
                        router.push("broad/Users")
                        setShowDrawer(false)

                    }}
                    icon={<Users color={active === 'Users' ? "#0665CB" : "white"} />}

                />
                <DrawerItem
                    label="Doctors"
                    active={active === 'Doctors'}
                    onPress={() => {
                        router.push("broad/Doctors")
                        setShowDrawer(false)
                    }}
                    icon={<FontAwesome name="stethoscope" size={22} color={active === 'Doctors' ? "#0665CB" : "white"} />}
                />

                <DrawerItem
                    label="Questionnaires"
                    active={active === 'Questionnaires'}
                    onPress={() => {
                        router.push("broad/Questionnaire")
                        setShowDrawer(false)
                    }}
                    icon={<Questionnaire color={active === 'Questionnaires' ? "#0665CB" : "white"} />}
                />
                <DrawerItem
                    label="Appointments"
                    active={active === 'Appointments'}
                    onPress={() => {
                        router.push("broad/Appointment")
                        setShowDrawer(false)
                    }}

                    icon={<Appointment color={active === 'Appointments' ? "#0665CB" : "white"} />}
                />
                <DrawerItem
                    label="Settings"
                    active={active === 'Settings'}
                    onPress={() => {
                        router.push("broad/Profile")
                        setShowDrawer(false)

                    }}
                    icon={<Feather name="settings" size={20} color={active === 'Settings' ? "#0665CB" : "white"} />}

                />
                <View style={{ marginTop: "auto" }}>
                    <DrawerItem
                        label="Log out"

                        onPress={() => {
                            HandleSignout()
                            setShowDrawer(false)
                        }}
                        icon={<Exit />}

                    />
                </View>
            </Drawer.Section>
        </View>
    )
}

export default UseDrawer

const styles = StyleSheet.create({
    drawer: {
        ...StyleSheet.absoluteFill,
        zIndex: 100,
        backgroundColor: "rgba(0, 0, 0, 0.35)"
    }
})