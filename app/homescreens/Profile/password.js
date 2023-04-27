import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Platform, Keyboard, Pressable } from 'react-native'

import { useForm } from "react-hook-form";
import Input from '../../../static/Input';
import Button from '../../../static/Button';

export default function password() {


    const { handleSubmit, control, watch } = useForm({
        defaultValues: {
            Old_password: "",
            New_Password: "",
            Confirm_Password: "",
        }
    });

    const New_Password = watch("New_Password")


    const onSavePassword = (data) => {
        console.log(data)
    }


    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false} >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ paddingBottom: 20 }} >

                <View style={{ paddingVertical: 15 }}>
                    <Text style={styles.title}>Change password</Text>
                </View>

                <Input control={control} label="Old password" placeholder="Old password" name="Old_Password" passord={true} rules={{ required: "required" }} />
                <Input control={control} label="New password" placeholder="New password" name="New_Password" passord={true}
                    rules={{ required: "required", minLength: { value: 7, message: "password should be atleast 7 characters." } }} />
                <Input control={control} label="Confirm password" placeholder="Confirm password" name="Confirm_Password" passord={true}
                    rules={{ required: "required", validate: value => value === New_Password || "password do not match" }}
                />

                <View style={{ marginTop: 60 }}>
                    <Button onPress={handleSubmit(onSavePassword)} title="Save" />
                </View>

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
    title: {
        fontFamily: 'Avenir',
        fontSize: 20,
        lineHeight: 27,
        color: "#000",
        fontWeight: "500"
    },
})