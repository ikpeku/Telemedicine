import { Text, View, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "../../../styles/Style";

import { useRouter } from "expo-router";
import Button from "../../../static/Button";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Page() {

    const router = useRouter();


    return (
        <SafeAreaView style={styles.container} >

            <View style={[styles.splashPhotoContainer, { marginTop: 50 }]}>

                <StatusBar style="dark" />


                <Image source={require('../../../assets/drugs.png')} style={styles.splashPhoto} resizeMethod="scale" resizeMode="contain" />
            </View>


            <View style={styles.layout}>


                <View style={styles.bottomContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>All done!</Text>
                        <Text style={styles.text}>Our medical expertise will review your questionnaire and send treatment for your conditionOur medical expertise will review your questionnaire and send treatment for your condition</Text>
                    </View>

                    <Button title="Processed to make payment" onPress={() => router.push("/")} />
                </View>

            </View>

        </SafeAreaView>
    );
}


