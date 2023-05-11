import { useState, useEffect, useCallback, useContext } from "react"
import { Text, View, Image, StyleSheet } from "react-native";
import { styles } from "../styles/Style";
import { useRouter } from "expo-router";
import { userProvider } from "../Context/UserProvider";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


export default function Page() {


    return (
        <View style={[styles.container, { alignItems: "center", justifyContent: "center", position: "relative" }]}>
            <ActivityIndicator animating={true} size={"large"} color={MD2Colors.grey200} style={{ position: "absolute" }} />
            <Image source={require('../assets/logo.png')} style={{}} />
        </View>
    )
}


