import { useState } from 'react';
import { StyleSheet, FlatList, View, Keyboard, Pressable } from 'react-native'
import { Text, Searchbar } from 'react-native-paper';
import CardTag from '../../../components/CardTag';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function Consultation() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.root}>
            <Pressable onPress={Keyboard.dismiss}>

                <Stack.Screen options={{ headerShown: false }} />

                <View style={{ borderRadius: 8, borderWidth: 1, borderColor: "gainsboro" }}>
                    <Searchbar
                        placeholder="Search for a doctor"
                        onChangeText={(event) => setSearchQuery(event)}
                        value={searchQuery}
                        style={{ width: "100%", backgroundColor: "#fff" }}
                    />
                </View>

                <Text variant='titleMedium'
                    style={{ textAlign: "center", fontWeight: "bold", fontFamily: 'Avenir', paddingHorizontal: 5, paddingVertical: 20 }}
                >Book an appointment with a doctor</Text>


                <FlatList
                    data={Array(10)}
                    renderItem={({ item }) => <CardTag
                        mode='elevated'
                        // elevation={1}
                        onPress={() => router.push("/homescreens/Consultation/Appointment")}
                        title="Collins Jeff"
                        subTitle="collinsjef655@gmail.com"
                        url="https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/Mid-Adult-Female-Entrepreneur-With-Arms-Crossed-/960x0.jpg?format=jpg&width=960"
                        rightIcon={<Ionicons name="chevron-forward" size={20} color="#0665CB" />}
                    />}
                    // keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        marginTop: 20,
        paddingBottom: 50
    }
})