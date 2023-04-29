import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Stack } from 'expo-router'
import CardTag from '../../../components/CardTag'
import { Ionicons } from '@expo/vector-icons';
import { Card, Text, Modal, Portal, Provider } from 'react-native-paper';
import Button from '../../../static/Button';

const Appointment = () => {
    const [visible, setVisible] = useState(false);
    const [star, setStar] = useState(0);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);



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
                    title="Collins Jeff"
                    subTitle="collinsjef655@gmail.com"
                    url="https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/Mid-Adult-Female-Entrepreneur-With-Arms-Crossed-/960x0.jpg?format=jpg&width=960"

                />

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 15, backgroundColor: "#fff" }}>
                    <Ionicons name="md-star" size={24} color="#FFCE31" />
                    <Text variant='bodySmall'>4.5</Text>
                    <Text onPress={showModal} variant='bodyMedium' style={{ backgroundColor: "#0665CB", color: "#fff", borderRadius: 4, paddingHorizontal: 5 }}>Rate this doctor</Text>
                </View>

                <View>
                    <Card style={{ backgroundColor: "#fff" }} mode='contained' >
                        <Card.Content>
                            <Text variant='headlineMedium' style={{ fontFamily: 'Avenir', fontWeight: 900 }} >About</Text>
                            <Text variant='bodyLarge'>
                                Dr. Smith is a 45-year-old physician with over
                                15 years of experience in the medical field. She received her medical degree from a top-ranked university
                                and completed her residency at a leading teaching hospital.
                            </Text>
                        </Card.Content>
                    </Card>
                </View>

                <View>
                    <Card style={{ backgroundColor: "#fff" }} mode='contained' >
                        <Card.Content>
                            <Text variant='headlineSmall' style={{ fontFamily: 'Avenir', fontWeight: 900 }} >Select date</Text>

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