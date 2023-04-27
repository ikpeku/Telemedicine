import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { MedicalProfile, PersonalProfile } from '../../../components';


export default function editprofile() {
    const [IsMedical, setIsMedical] = useState(false);








    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false} >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ paddingBottom: 20 }} >

                <View style={styles.segmentContainer}>
                    <Text onPress={() => setIsMedical(false)} style={[!IsMedical ? styles.segmentActive : styles.segmentInvalid]}>Personal</Text>
                    <Text onPress={() => setIsMedical(true)} style={[IsMedical ? styles.segmentActive : styles.segmentInvalid]}>Medical</Text>
                </View>



                {!IsMedical && <PersonalProfile />}
                {IsMedical && <MedicalProfile />}




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