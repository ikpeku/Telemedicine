import { useState, useEffect, useCallback } from "react"
import { SplashScreen } from "expo-router";
import { Text, View, Pressable, Image, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "../styles/Style";
import Splash from "../components/Splash";
import { useFonts } from 'expo-font';

import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();


export default function Page() {
    const [isReady, setReady] = useState(false);
    const router = useRouter();


    const [fontsLoaded] = useFonts({
        'Nunito': require('../assets/Nunito/Nunito-VariableFont_wght.ttf'),
        'Lato': require('../assets/Lato/Lato-Black.ttf'),
    });





    useEffect(() => {
        // Perform some sort of async data or asset fetching.
        setTimeout(() => {
            setReady(true);
        }, 1000);
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }


    return (
        <Splash onLayout={onLayoutRootView}>
            <ScrollView style={styles.container} >
                <StatusBar style="light" />
                {!isReady && <SplashScreen />}

                <View style={styles.skip}>
                    <Pressable >
                        <Text style={[styles.skipText, { opacity: 0 }]}>Skip</Text>
                    </Pressable>
                </View>

                <View style={styles.splashPhotoContainer}>
                    <Image source={require('../assets/splash1.png')} style={styles.splashPhoto} resizeMode="contain" />
                </View>

                <View style={styles.splashPaginations}>
                    <View style={styles.splashPagination} />
                    <View style={styles.splashPagination} />
                    <View style={[styles.splashPagination, { width: 20, height: 3 }]} />
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Treatment</Text>
                    <Text style={styles.text}>After your consultation, you can proceed with getting treatment for your illness</Text>
                </View>

                <View style={styles.splashBtnSContainer}>
                    <Pressable onPress={() => router.push("/signup/register")} style={styles.splashBtnSignContainer}>
                        <Text style={[styles.splashBtnTextContainer, { color: "#0665CB" }]}>Sign up</Text>
                    </Pressable>
                    <Pressable onPress={() => router.push("/signup/login")} style={[styles.splashBtnSignContainer, { backgroundColor: "transparent", }]}>
                        <Text style={[styles.splashBtnTextContainer, { color: "#fff" }]}>Log In</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </Splash>
    );
}

