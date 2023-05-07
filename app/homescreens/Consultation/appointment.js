import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Stack, useSearchParams } from 'expo-router'
import CardTag from '../../../components/CardTag'
import { Ionicons } from '@expo/vector-icons';
import { Card, Text, Modal, Portal, Provider } from 'react-native-paper';
import Button from '../../../static/Button';
import { Doctors } from '../../../components/data';

const Appointment = () => {
    const [visible, setVisible] = useState(false);
    const [star, setStar] = useState(0);
    const [data, setData] = useState({})

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const { id } = useSearchParams()

    // console.log(Doctors.find(value => value.id === +id))

    useEffect(() => {
        setData(Doctors.find(value => value.id === +id))

    }, [])


    // console.log(data)


    return (
        < Provider >
            <View style={styles.root}>
                <Stack.Screen options={{ title: "Book Appointment" }} />



                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: 'white', padding: 20, width: "90%", alignSelf: "center", borderRadius: 8 }}>
                        <Text variant='titleLarge' style={{ fontWeight: "bold", fontFamily: 'Avenir' }}>Rate this doctor</Text>
                        <Text variant='bodyLarge'>Tell others what you think</Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 20 }}>
                            <Ionicons name="md-star" size={24} color={star === 0 ? "#D1D1D1" : "#0665CB"} onPress={() => setStar(1)} />
                            <Ionicons name="md-star" size={24} color={star === 2 || star === 3 || star === 4 || star === 5 ? "#0665CB" : "#D1D1D1"} onPress={() => setStar(2)} />
                            <Ionicons name="md-star" size={24} color={star === 3 || star === 4 || star === 5 ? "#0665CB" : "#D1D1D1"} onPress={() => setStar(3)} />
                            <Ionicons name="md-star" size={24} color={star === 4 || star === 5 ? "#0665CB" : "#D1D1D1"} onPress={() => setStar(4)} />
                            <Ionicons name="md-star" size={24} color={star === 5 ? "#0665CB" : "#D1D1D1"} onPress={() => setStar(5)} />
                        </View>
                        <Button title="Done" onPress={() => setVisible(false)} />

                    </Modal>

                </Portal>



                <CardTag
                    title={data?.Name}
                    subTitle={data?.expert}
                    url={data?.img}

                />

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 15, backgroundColor: "#fff" }}>
                    <Ionicons name="md-star" size={24} color="#FFCE31" />
                    <Text variant='bodySmall'>{data?.rate}</Text>
                    <Text onPress={showModal} variant='bodyMedium' style={{ backgroundColor: "#0665CB", color: "#fff", borderRadius: 4, paddingHorizontal: 5 }}>Rate this doctor</Text>
                </View>

                <View>
                    <Card style={{ backgroundColor: "#fff" }} mode='contained' >
                        <Card.Content>
                            <Text variant='headlineMedium' style={{ fontFamily: 'Avenir', }} >About</Text>
                            <Text variant='bodyLarge'>{data?.about}</Text>
                        </Card.Content>
                    </Card>
                </View>

                <View>
                    <Card style={{ backgroundColor: "#fff" }} mode='contained' >
                        <Card.Content>
                            <Text variant='headlineSmall' style={{ fontFamily: 'Avenir' }} >Select date</Text>

                        </Card.Content>
                    </Card>
                </View>

                <View style={{ marginTop: "auto", marginBottom: 20 }}>
                    <Button title="Continue" />
                </View>
            </View>

        </ Provider >
    )
}

export default Appointment

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 9
    }
})