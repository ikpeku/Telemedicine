import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { CardTag, DoctorCard, Modal } from '../../../components'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '../../../static';
import { Text, Card } from 'react-native-paper';


const Doctor = () => {

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);


    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll} >


            <Modal visible={visible} hideModal={hideModal} remove={true} />
            <DoctorCard title={"Earnings"} subTitle={"$1,980"} rightIcon={<MaterialCommunityIcons name="cash-multiple" size={26} color="white" />} />

            <View>
                <CardTag
                    title={"Dr. Benjamin John"}
                    subTitle={"Dr. Benjamin John"}
                    url={"https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/Mid-Adult-Female-Entrepreneur-With-Arms-Crossed-/960x0.jpg?format=jpg&width=960"}

                />
                <View style={{ marginLeft: "20%", backgroundColor: "#fff" }}>
                    <Ionicons name="md-star" size={24} color="#FFCE31" />
                    <Text variant='bodySmall'>4.5</Text>
                </View>
            </View>

            <View>
                <Card style={{ backgroundColor: "#fff" }} mode='outlined' >
                    <Card.Content style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                        <View style={{ alignItems: "center" }}>
                            <Text variant='titleMedium'>12</Text>
                            <Text>Years exp.</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text variant='titleMedium'>30</Text>
                            <Text>Patients</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text variant='titleMedium'>56</Text>
                            <Text>Rate</Text>
                        </View>

                    </Card.Content>
                </Card>
            </View>


            <View>
                <Card style={{ backgroundColor: "#fff" }} mode='contained' >
                    <Card.Content>
                        <Text variant='headlineMedium' style={{ fontFamily: 'Avenir', }} >About</Text>
                        <Text variant='bodyLarge'>Dr. Smith is a 45-year-old physician with over 15 years of experience in the medical field. She received her medical degree from a top-ranked university and completed her residency at a leading teaching hospital.</Text>
                    </Card.Content>
                </Card>
            </View>

            <View style={{ width: "100%", marginTop: 30, }}>
                <Button title="Remove" onPress={showModal} />
            </View>



        </ScrollView>
    )
}

export default Doctor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 10,
        backgroundColor: "#fff",


    },
    scroll: {
        rowGap: 10,
        paddingTop: 20

    }
})