
import { Text, View, Image, FlatList, StyleSheet, useWindowDimensions, Platform } from "react-native";
import { StatusBar } from 'expo-status-bar';
// import { styles } from "../styles/Style";
import { useRouter } from "expo-router";
import Button from "../static/Button";
import { useRef, useState } from "react";
import { Checkbox } from "react-native-paper";






export default function Page() {
  const [terms, setTerms] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const router = useRouter();
  const { height, width } = useWindowDimensions()




  const Item = [
    {
      id: 1,
      img: require('../assets/onboard1.png')
    },
    {
      id: 2,
      img: require('../assets/onboard2.png')
    },
    {
      id: 3,
      img: require('../assets/onboard3.png')
    },
  ]

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51
  }



  const handleSubmit = () => {
    if (!terms) return

    router.replace("/signup/login")

  }


  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index || 0
      setSelectedIndex(index)
    }
  })



  return (
    <View style={[rootstyles.root]}>
      <View >
        <FlatList
          horizontal
          pagingEnabled
          data={Item} renderItem={({ item }) => <Image source={item.img} style={[rootstyles.photos, { width: width - 20 }]} resizeMode="contain" />}
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged.current}
        />
      </View>

      <View style={rootstyles.bottomPart} >

        <View style={rootstyles.splashPaginations}>
          {
            Item.map((_, index) => <View key={index} style={[rootstyles.splashPagination, selectedIndex === index ? { width: 25, height: 3, backgroundColor: "#0665CB" } : {}]} />)
          }

        </View>

        {selectedIndex === 0 && <Text style={rootstyles.text}>
          Embodiment healthcare, your one stop shop for all your health care needs. Get expert treatment within minutes and have your medication delivered to you within an hour.
        </Text>}

        {selectedIndex === 1 && <Text style={rootstyles.text}>
          Expert Medical treatment is just a message away- no appointments or video call needed        </Text>}
        {selectedIndex === 2 &&
          <View>
            <Text style={[rootstyles.text, { textAlign: "left" }]}> ✔ No appointments</Text>
            <Text style={[rootstyles.text, { textAlign: "left" }]}> ✔ Home delivery of prescribed medications</Text>
            <Text style={[rootstyles.text, { textAlign: "left" }]}> ✔ Personalized treatment</Text>
            <Text style={[rootstyles.text, { textAlign: "left" }]}> ✔ On-going and support</Text>
          </View>
        }

        <Button title="Get Started" onPress={handleSubmit} type={!terms ? "secondary" : "primary"} />

        <View style={{ flexDirection: "row", width: "85%", gap: 10 }}>
          <Checkbox status={terms ? "checked" : "unchecked"} onPress={() => setTerms(v => !v)} uncheckedColor="#0665CB" color="#0665CB" />
          <Text style={[rootstyles.text]}>
            By continuing, you agree to our <Text style={{ textDecorationLine: "underline" }}>terms and conditions</Text>
          </Text>
        </View>

      </View>
    </View>
  );
}


const rootstyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    height: "100%"
  },
  photos: {
    // width: width
    aspectRatio: 4 / 4,
    // borderWidth: 2,
    // borderColor: "red"
  },
  splashPaginations: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    height: 15,
  },
  splashPagination: {
    backgroundColor: "rgba(24, 25, 27, 0.35)",
    width: 16,
    height: 2,
    borderRadius: 20
  },
  text: {
    color: "#0665CB",
    textAlign: "center",
    fontWeight: "500"
  },
  bottomPart: {
    gap: 20
  }
})

