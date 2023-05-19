import { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Text, Modal, Portal } from 'react-native-paper';
import { Button, Input } from '../static';
import { useForm } from 'react-hook-form';
import { useRouter } from 'expo-router';

const DoctorModal = ({ visible, hideModal }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const { handleSubmit, control, } = useForm({
        defaultValues: {
            Email: "e@g.com",
        }
    });

    const onSubmit = async (data) => {
        if (loading) return
        setLoading(true)
        try {

            router.push({ pathname: "broad/Doctors/adminsuccess", params: { type: "invite" } })
            hideModal()
        } catch (error) {
            Alert.alert("Error", error.message)

        } finally {
            setLoading(false)
        }
    }
    return (
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.root}>
                <Text variant='titleLarge'>Invite a new doctor</Text>
                <View style={{ width: "100%" }}>

                    <Input control={control} label="Doctor Email" placeholder="Enter doctors email address" name="Email" rules={{
                        required: "This field is required.", pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Enter a valid e-mail address',
                        }
                    }} />
                </View>

                <View style={styles.btn}>
                    <View style={{ flexGrow: 1, flex: 1 }}>
                        {!loading && <Button title="Add" onPress={handleSubmit(onSubmit)} />}
                        {loading && <Button title="loading" />}
                    </View>
                    <View style={{ flexGrow: 1, flex: 1 }}>

                        <Button title="Cancel" type='secondary' onPress={hideModal} />
                    </View>

                </View>
            </Modal>
        </Portal>
    )
}

export default DoctorModal

const styles = StyleSheet.create({
    root: { backgroundColor: 'white', padding: 20, marginHorizontal: 20, borderRadius: 16, alignItems: "center", rowGap: 20 },
    btn: { width: "100%", flexDirection: "row-reverse", gap: 20 }
})