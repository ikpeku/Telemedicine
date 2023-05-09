import { useState, useEffect, useCallback } from "react"
import { SplashScreen } from "expo-router";
import { Text, View, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "../styles/Style";
import { useFonts } from 'expo-font';
import { useRouter } from "expo-router";
import Button from "../static/Button";



SplashScreen.preventAutoHideAsync();


export default function Page() {
  const [isReady, setReady] = useState(false);
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'Lato': require('../assets/Lato/Lato-Black.ttf'),
    'Nunito': require('../assets/Nunito/Nunito-VariableFont_wght.ttf'),
    'Avenir': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
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
    <View style={styles.container} onLayout={onLayoutRootView} >

      <View style={styles.splashPhotoContainer}>

        <StatusBar style="dark" />
        {!isReady && <SplashScreen />}

        <Image source={require('../assets/splash1.png')} style={styles.splashPhoto} resizeMethod="scale" resizeMode="contain" />
      </View>

      <View style={styles.layout}>

        <View style={styles.splashPaginations}>
          <View style={[styles.splashPagination, { width: 25, height: 3, backgroundColor: "#0665CB" }]} />
          <View style={styles.splashPagination} />
          <View style={styles.splashPagination} />
        </View>



        <View style={styles.bottomContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Identify your illness</Text>
            <Text style={styles.text}>Choose the most appropriate diagnosis that you want to treat</Text>
          </View>


          <Button title="Next" onPress={() => router.push("onboarding2")} />
        </View>

      </View>


    </View>
    // </Splash>
  );
}


