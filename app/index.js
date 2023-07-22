import { useState, useEffect, useCallback, useContext } from "react"
import { View, Image } from "react-native";
import { styles } from "../styles/Style";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { userProvider } from "../Context/UserProvider";
import { SplashScreen } from "expo-router";
import { useFonts } from 'expo-font';
import { useRouter } from "expo-router";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync();


export default function Page() {
    const { user } = useContext(userProvider)
    const { getItem, setItem } = useAsyncStorage('@isNewUser');

    const router = useRouter()

    const [isReady, setReady] = useState(false);
    const [fontsLoaded] = useFonts({
        'Lato': require('../assets/Lato/Lato-Black.ttf'),
        'Nunito': require('../assets/Nunito/static/Nunito-Black.ttf'),
        'Avenir': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
    });



    useEffect(() => {
        // Perform some sort of async data or asset fetching.
        setTimeout(() => {
            setReady(true);
        }, 1000 * 5);
    }, [user]);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }


    // if (!isReady) return <SplashScreen />




    const getData = async () => {

        const item = await getItem()

        if (user !== null && user !== undefined) {
            // item previously stored

            router.replace("homescreens");
            return
        }

        if (!item && !user) {
            router.replace("onboarding1");
            return
        }

        if (item && user === null) {
            router.replace("/signup/login");
            return
        }

    }

    getData()


    if (!isReady || user === undefined) {

        return (
            <View style={[styles.container, { alignItems: "center", justifyContent: "center", position: "relative" }]} onLayout={onLayoutRootView}>
                <ActivityIndicator animating={true} size={"large"} color={MD2Colors.grey200} style={{ position: "absolute" }} />
                <Image source={require('../assets/logo.png')} style={{}} />
            </View>
        )
    }

}


