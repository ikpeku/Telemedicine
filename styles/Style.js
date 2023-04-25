import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        // aspectRatio: "auto"
        backgroundColor: "#fff"

    },


    splashPhotoContainer: {
        flex: 1,

    },
    layout: {
        flex: 1
    },
    title: {
        fontFamily: "Nunito",
        color: "#0665CB",
        fontWeight: 500,
        fontSize: 35,
        lineHeight: 33,
        textAlign: "center",
        // marginBottom: 10,
        paddingVertical: 5,
    },
    text: {
        color: "#0665CB",
        fontFamily: "Nunito",
        textAlign: "center",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 22,
        paddingHorizontal: 10
    },

    bottomContainer: {
        flex: 1,
        justifyContent: "space-around",
        paddingHorizontal: 20
    },
    titleContainer: {
    },
    splashPhoto: {
        width: "100%",
        height: "100%",

    },

    splashBtnSContainer: {
        width: "100%",
        flexDirection: "row",
        gap: 10,
        // flex: 1
        maxWidth: width
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
    }

});