import { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useForm } from "react-hook-form";
import { Button, Input } from '../../static';
import { List, RadioButton } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { userProvider } from '../../Context/UserProvider';


const DoctorProfile = () => {
    const router = useRouter()
    const { user } = useContext(userProvider)

    const [sex, setSex] = useState("male")
    const [DOB, setDOB] = useState()

    const { handleSubmit, control } = useForm({
        defaultValues: {
            Full_Name: user?.attributes?.name,
            Email: user?.attributes?.email,
            Phone_Number: user?.attributes?.phone_number,
            Specialization: "",
            Rate: "",
            Years_Of_Experience: "",
            About: ""

        }
    });


    const onSavePress = () => {
        router.push("../")


    }



    return (
        <>
            <Input control={control} name="Full_Name" placeholder="Enter Full Name" label="Full Name" rules={{ required: "required" }} />
            <Input control={control} name="Email" placeholder="Enter Email" label="Email" rules={{ required: "required" }} editable={false} />
            <Input control={control} name="Phone_Number" placeholder="Enter  Phone Number" label="Phone Number" rules={{ required: "required" }} />
            <Input control={control} name="Address" placeholder="Enter Address" label="Address" rules={{ required: "required" }} />

            <Input control={control} name="Specialization" placeholder="Specialization" label="Specialization" rules={{ required: "required" }} />
            <Input control={control} name="Years_Of_Experience" placeholder="Years of experience" label="Years of experience" rules={{ required: "required" }} />
            <Input control={control} name="Rate" placeholder="Rate $0.00" label="Rate" rules={{ required: "required" }} />
            <Input control={control} name="About" placeholder="Write about yourself" label="Write about yourself" rules={{ required: "required" }} multiline={true} numberOfLines={10} />

            <View style={{ marginTop: 30 }}>
                <Button title="Save" onPress={handleSubmit(onSavePress)} />
            </View>
        </>
    )
}

export default DoctorProfile

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