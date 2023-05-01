import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useForm } from "react-hook-form";
import { Button, Input } from '../../static';
import { List, RadioButton } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PersonalProfile = () => {
    const router = useRouter()

    const [sex, setSex] = useState("male")
    const [DOB, setDOB] = useState()

    const { handleSubmit, control } = useForm({
        defaultValues: {
            Full_Name: "",
            Email: "",
            Phone_Number: "",
            Address: "",
            Sex: "",

        }
    });


    const onSavePress = () => {
        router.push("../")


    }



    return (
        <>
            <Input control={control} name="Full_Name" placeholder="Enter Full Name" label="Full Name" rules={{ required: "required" }} />
            <Input control={control} name="Email" placeholder="Enter Email" label="Email" rules={{ required: "required" }} />
            <Input control={control} name=" Phone_Number" placeholder="Enter  Phone Number" label=" Phone Number" rules={{ required: "required" }} />
            <Input control={control} name="Address" placeholder="Enter Address" label="Address" rules={{ required: "required" }} />

            <List.AccordionGroup >
                <List.Accordion title="Sex Assigned at Birth" id="1" style={[styles.container, { marginBottom: 10 }]}
                    right={props => props.isExpanded
                        ? <MaterialIcons {...props} name="keyboard-arrow-up" size={24} color="#0665CB" />
                        : <MaterialIcons {...props} name="keyboard-arrow-down" size={24} color="#0665CB" />}
                >
                    <View style={styles.item}>
                        <List.Item title="Male" style={{ flexGrow: 1 }} left={props =>
                            <RadioButton
                                {...props}
                                value="female"
                                status={sex === "male" ? 'checked' : 'unchecked'}
                                onPress={() => setSex("male")}
                            />} />
                        <List.Item title="Female" style={{ flexGrow: 1 }} left={props =>
                            <RadioButton
                                value="female"
                                {...props}
                                status={sex === "female" ? 'checked' : 'unchecked'}
                                onPress={() => setSex("female")}
                            />} />
                    </View>
                </List.Accordion>

                <List.Accordion title="Sex Assigned at Birth" id="2" style={styles.container}
                    right={props => <MaterialCommunityIcons {...props} name="calendar-month" size={24} color="gainsboro" />}
                >

                </List.Accordion>

            </List.AccordionGroup >
            <View style={{ marginTop: 30 }}>
                <Button title="Save" onPress={handleSubmit(onSavePress)} />
            </View>
        </>
    )
}

export default PersonalProfile

const styles = StyleSheet.create({
    container: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 4,

    },

    item: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})