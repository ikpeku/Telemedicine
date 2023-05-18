import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';
import { Card, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../static/Button';
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';


const Item = ({ title, date }) => {

    return (
        <Card mode='contained' style={styles.item} >
            <Card.Content>
                <View style={styles.titleContainer}>
                    <Text variant='titleMedium' style={[styles.title, { color: "#0665CB", }]}>March 12, 2023</Text>
                    <View style={{ width: 60, padding: 5 }}>
                        <Text variant='titleMedium' style={[styles.title, styles.btn]}>Edit</Text>
                    </View>
                </View>


                <View style={{ flexDirection: "row", paddingVertical: 5, gap: 6, flexWrap: "wrap", rowGap: 11, marginTop: 10 }}>
                    {
                        ["09:00 am", "10:00 am", "12:00 pm", "02:00 pm", "04:00 pm", "05:00 pm"].map((time, index) => <Text key={index} style={[styles.title, { color: "#000", backgroundColor: "#0665CB14", padding: 5, borderRadius: 8 }]}>{time}</Text>)
                    }
                </View>
            </Card.Content>

        </Card>
    )
};

const Empty = () => {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", aspectRatio: 1, width: "100%" }}>
            <Entypo name="add-to-list" size={200} color="gainsboro" />

            <Text variant='headlineLarge' style={{ color: "gainsboro", textAlign: "center" }} >No Appointment</Text>
        </View>
    )
}


export default function Appointment() {
    const router = useRouter()
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: "50%", marginLeft: "auto" }}>
                <Button title={"+ Create appointment"} onPress={() => router.push("./Appointment/appointment")} />
            </View>

            <FlatList
                data={Array(5)}
                renderItem={({ item }) => <Item />}
                // keyExtractor={item => item.id}
                ListEmptyComponent={<Empty />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 10 }}
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
        gap: 20
    },
    item: {
        backgroundColor: '#fff',
        // margin: 5,
        borderWidth: 0.4,
        borderColor: "rgba(0,0,0,0.1)",
        width: "100%"


    },
    title: {
        fontFamily: 'Avenir',

    },
    titleContainer: {
        // flex: 1,
        flexDirection: "row",
        flexShrink: 1,
        flexGrow: 1,
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        // maxHeight: 20
    },
    btn: {
        backgroundColor: "#0665CB",
        color: "#fff",
        textAlign: "center",
        borderRadius: 5

    }
});

