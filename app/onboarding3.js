
import { SplashScreen } from "expo-router";
import { Text, View, Pressable, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "../styles/Style";

import { useRouter } from "expo-router";
import Button from "../static/Button";



export default function Page() {
    const router = useRouter();


    return (
        <View style={styles.container} >

            <View style={styles.splashPhotoContainer}>

                <StatusBar style="dark" />


                <Image source={require('../assets/splash3.png')} style={styles.splashPhoto} resizeMethod="scale" resizeMode="contain" />
            </View>

            <View style={styles.layout}>

                <View style={styles.splashPaginations}>
                    <View style={styles.splashPagination} />
                    <View style={styles.splashPagination} />
                    <View style={[styles.splashPagination, { width: 25, height: 3, backgroundColor: "#0665CB" }]} />
                </View>



                <View style={styles.bottomContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Treatment</Text>
                        <Text style={styles.text}>After your consultation, you can proceed with getting treatment for your illness</Text>
                    </View>

                    <View >

                        <View style={styles.splashBtnSContainer}>

                            <View style={{ flex: 1 }}>

                                <Button title="Sign up" onPress={() => router.push("/signup/register")} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button title="Log In" type="secondary" onPress={() => router.push("/signup/login")} />

                            </View>
                        </View>
                    </View>
                </View>

            </View>


        </View>
    );
}

