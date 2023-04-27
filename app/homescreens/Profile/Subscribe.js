import { Pressable, StyleSheet, View, } from 'react-native'
import { Text, Checkbox } from 'react-native-paper';
import { Octicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Button } from '../../../static';
import { useRouter } from 'expo-router';



const Render = ({ title }) => (
    <View style={{ width: "100%", flexDirection: "row", gap: 15 }}>
        <Octicons name="check" size={24} color="#0665CB" />
        <Text variant="bodyLarge">{title}</Text>
    </View>
)


const Subscribe = () => {
    const [annual, setAnnual] = useState("annual")

    const router = useRouter()


    const onSubsquire = () => {
        router.push("./Done")
    }

    return (
        <View style={styles.root}>

            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 5, paddingVertical: 30 }}>
                <Text variant="titleLarge">Select your plan</Text>
                <Text style={{ paddingVertical: 8 }} variant="titleLarge">
                    {annual === "annual" ? "$160/y" : "$15/y"}
                    <Text variant="titleSmall" style={{ color: "gainsboro" }} > (Billed {annual === "annual" ? "annual" : "monthly"})</Text>
                </Text>
            </View>


            <View style={{ flexDirection: "row", padding: 5, gap: 10 }}>
                <Pressable onPress={() => setAnnual("monthly")} style={[styles.box, annual == "monthly" ? { borderColor: "#0665CB" } : {}]}>
                    <Text variant="titleLarge">Monthly</Text>
                    <Checkbox
                        status={annual === "monthly" ? 'checked' : 'unchecked'}

                    />
                </Pressable>


                <Pressable onPress={() => setAnnual("annual")} style={[styles.box, annual == "annual" ? { borderColor: "#0665CB" } : {}]}>
                    <Text variant="titleLarge">Annual</Text>
                    <Checkbox
                        status={annual === "annual" ? 'checked' : 'unchecked'}

                    />
                </Pressable>

            </View>


            <Text style={{ marginVertical: 18 }} variant="titleLarge">What you get</Text>

            <View style={{ gap: 10 }}>
                <Render title="Up to 3 appointments everyday " />
                <Render title="Drug refill every week" />
                <Render title="Free delivery" />
            </View>

            <View style={{ marginTop: "auto", paddingBottom: 20 }}>
                <Button title="Subscribe" onPress={onSubsquire} />
            </View>

        </View>
    )
}

export default Subscribe

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: 10
    },
    box: {
        borderWidth: 1,
        borderRadius: 8,
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 18
    }
})