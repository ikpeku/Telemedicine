import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Avatar, MedicalProfile, PersonalProfile } from '../../../components';
import { TextInput } from 'react-native-paper';


export default function editprofile() {
    const [IsMedical, setIsMedical] = useState(false);








    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false} >
            <KeyboardAvoidingView style={{ paddingBottom: 20 }} >


                <View style={styles.segmentContainer}>
                    <Text onPress={() => setIsMedical(false)} style={[!IsMedical ? styles.segmentActive : styles.segmentInvalid]}>Personal</Text>
                    <Text onPress={() => setIsMedical(true)} style={[IsMedical ? styles.segmentActive : styles.segmentInvalid]}>Medical</Text>
                </View>


                {!IsMedical && <Avatar photoUrl={"https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/Mid-Adult-Female-Entrepreneur-With-Arms-Crossed-/960x0.jpg?format=jpg&width=960"} />}

                {
                    !IsMedical && [1, 2, 3, 4, 5].map(item => <TextInput mode='outlined' disabled key={item} style={{ marginBottom: 5, backgroundColor: "white" }} />)
                }
                {
                    IsMedical && [1, 2, 3, 4, 5].map(item => <TextInput mode='outlined' disabled key={item} style={{ marginBottom: 5, backgroundColor: "white" }} />)
                }




            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"

    },
    segmentContainer: {
        flexDirection: "row",
        paddingTop: 10,
        marginBottom: 15
    },
    segmentActive: {
        borderBottomColor: "#0665CB",
        borderBottomWidth: 4,
        paddingBottom: 8,
        flex: 1,
        textAlign: "center"
    },
    segmentInvalid: {
        borderBottomColor: "rgba(0, 0, 0, 0.15)",
        borderBottomWidth: 4,
        paddingBottom: 8,
        flex: 1,
        textAlign: "center"
    },

})