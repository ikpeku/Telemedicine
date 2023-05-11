
import { Text, View, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "../styles/Style";
import { useRouter } from "expo-router";
import Button from "../static/Button";



export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}  >

      <View style={styles.splashPhotoContainer}>

        <StatusBar style="dark" />


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


