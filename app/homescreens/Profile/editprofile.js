import { StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView, Platform, Pressable, Keyboard } from 'react-native'
import React from 'react'
import Input from '../../../static/Input';
import { useForm } from "react-hook-form";
import Button from '../../../static/Button';


export default function editprofile() {
    const [IsMedical, setIsMedical] = React.useState(false);


    const { handleSubmit, control, watch } = useForm({
        defaultValues: {
            Full_Name: "",
            Email: "",
            Phone_Number: "",
            Address: "",
            Sex: "",
            DOB: ""
        }
    });


    const onSavePress = () => {

    }



    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false} >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ paddingBottom: 20 }} >

                <View style={styles.segmentContainer}>
                    <Text onPress={() => setIsMedical(false)} style={[!IsMedical ? styles.segmentActive : styles.segmentInvalid]}>Personal</Text>
                    <Text onPress={() => setIsMedical(true)} style={[IsMedical ? styles.segmentActive : styles.segmentInvalid]}>Medical</Text>
                </View>


                {/* <View style={styles.textInputContainer}>
                        <TextInput placeholder="Full Name" style={styles.input} />
                    </View>

                    <View style={styles.textInputContainer}>
                        <TextInput placeholder="Email Address" style={styles.input} />
                    </View>

                    <View style={styles.textInputContainer}>
                        <TextInput placeholder="Phone Number" style={styles.input} />
                    </View>

                    <View>
                        <Button styleProps={{ width: "90%", alignSelf: "center", marginVertical: 30 }}>
                            <Text style={[styles.cta, { color: "#fff" }]}>Save</Text>
                        </Button>
                    </View> */}

                {!IsMedical && <View>
                    <Input control={control} name="Full_Name" placeholder="Enter Full Name" label="Full Name" rules={{ required: "required" }} />
                    <Input control={control} name="Email" placeholder="Enter Email" label="Email" rules={{ required: "required" }} />
                    <Input control={control} name=" Phone_Number" placeholder="Enter  Phone Number" label=" Phone Number" rules={{ required: "required" }} />
                    <Input control={control} name="Address" placeholder="Enter Address" label="Address" rules={{ required: "required" }} />

                </View>}

                <Button title="Save" onPress={handleSubmit(onSavePress)} />

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
        flexDirection: "row"
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
    textInputContainer: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.08)",
        marginVertical: 20
    },
    input: {
        height: 40,
        flexGrow: 1,
    },
    cta: {
        fontFamily: 'Avenir',
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 22,

        textAlign: "center",

        color: "rgba(0, 0, 0, 0.5)"
    },


})