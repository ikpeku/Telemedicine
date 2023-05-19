import { useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    // Text,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import { Card, Text as Text, Searchbar } from 'react-native-paper';
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';



import { Stack, useRouter } from 'expo-router';

import { Avatar, DoctorCard, UseDrawer } from '../../../components';
import { Appointment, Candle, Exit, Questionnaire, Users } from '../../../assets';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: "Wade Warren",
        email: 'wadwarren@gmail.com',
        phone: "08108744355"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: "Guy Hawkins",
        email: 'hawkins56@gmail.com',
        phone: "(603) 555-0123"
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
        name: "Edward Cuff",
        email: 'cuffwardd@gmail.comm',
        phone: "(684) 555-0102"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d722',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },


    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba111',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63222',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72333',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2444',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632555',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d722666',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    }, {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba777',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63888',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72999',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2000',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63211111',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7222222222',
        name: "Jeff Samson",
        email: 'jeffamson@gmail.com',
        phone: "08108744355"
    },
];

const Item = ({ item, index, router }) => {


    return (
        <Card mode='contained' style={styles.item} >
            <Card.Content>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 }}>
                    <Text variant='titleMedium' style={[styles.title, { color: "#000" }]}>#{index + 1} - {item.name} </Text>
                    < TouchableOpacity onPress={() => router.push("./Users/user")}>
                        <Text style={[styles.title,
                        { color: "#0665CB", backgroundColor: "rgba(6, 101, 203, 0.08)", borderRadius: 8, paddingVertical: 10, paddingHorizontal: 18 }]}>View</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5, gap: 25 }}>
                    <Text style={[styles.title, { color: "#0665CB" }]}>{item.email}</Text>
                    <Text style={[styles.title, { color: "gainsboro" }]}>{item.phone}</Text>
                </View>
            </Card.Content>



        </Card>
    )
};


const Empty = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>No Notification</Text>

        </View>
    )
}



export default function Notification() {
    const [showDrawer, setShowDrawer] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter()

    return (
        <SafeAreaView style={styles.container}>
            <Stack screenOptions={{ headerShown: false }} />

            {showDrawer && <UseDrawer setShowDrawer={setShowDrawer} active='Appointments' />}

            <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Avatar
                    type='Start'
                    text={"Hi, Dr. John"}
                    photoUrl={"https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/Mid-Adult-Female-Entrepreneur-With-Arms-Crossed-/960x0.jpg?format=jpg&width=960"} />
                <Feather name="menu" size={24} color="black" onPress={() => setShowDrawer(true)} />
            </View>

            <View style={{ width: "100%", flexDirection: "row" }}>
                <DoctorCard title={"Appointment"} subTitle={"132"} rightIcon={<Appointment color="white" />} />
            </View>

            <View style={{ width: "100%" }}>


                <View style={{ borderRadius: 8, borderWidth: 1, borderColor: "gainsboro" }}>
                    <Searchbar
                        placeholder="Search for illness"
                        onChangeText={(event) => setSearchQuery(event)}
                        value={searchQuery}
                        style={{ width: "100%", backgroundColor: "#fff" }}
                    />
                </View>
            </View>

            <View style={{ width: "100%" }}>
                <Text variant='headlineMedium'>Recent appointments</Text>
            </View>


            <FlatList
                data={DATA}
                renderItem={({ item, index }) => <Item index={index} item={item} router={router} />}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Empty />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ rowGap: 10 }}
            />


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        paddingVertical: 20,
        gap: 20,
        position: "relative"
    },
    item: {
        backgroundColor: '#fff',
        // margin: 1,
        borderWidth: 0.4,
        borderColor: "rgba(0,0,0,0.1)",
        // width: "100%"


    },
    title: {
        fontFamily: 'Avenir',
        // fontWeight: 500,
        // fontSize: 16,
        // lineHeight: 22,
        // color: "#000",
    },

});

