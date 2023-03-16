import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: "100%",

        // backgroundColor: "linear-gradient(180deg, #0152A8 0%, #086CDA 100%);"
    },
    splash: {
        flex: 1,
        height: height
    },
    skip: {
        position: "absolute",
        width: 60,
        alignSelf: "flex-end",
        marginTop: 60,
        zIndex: 10
    },
    skipText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 22,
        fontFamily: "Nunito",
    },
    splashPhotoContainer: {
        paddingTop: 10

    },
    title: {
        fontFamily: "Nunito",
        color: "#fff",
        fontWeight: 500,
        fontSize: 35,
        lineHeight: 33,
        textAlign: "center",
        // marginBottom: 10,
        paddingVertical: 20
    },
    text: {
        color: "rgba(255, 255, 255, 0.8)",
        fontFamily: "Nunito",
        textAlign: "center",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 22,
    },
    titleContainer: {
        marginTop: 30
    },
    splashPhoto: {
        alignSelf: "center",
        maxWidth: width - 50,

    },
    splashBtnTextContainer: {
        color: "#0665CB",
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 22,
        fontFamily: "Lato",
        textAlign: "center",

    },
    splashBtnContainer: {
        borderRadius: 50,
        backgroundColor: "#ffff",
        height: 51,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
        borderColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 50,
        marginHorizontal: 20

    },
    splashBtnSContainer: {
        flexDirection: "row",
        // flex: 1
    },
    splashBtnSignContainer: {
        borderRadius: 50,

        backgroundColor: "#ffff",
        borderWidth: 1,
        borderColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexGrow: 1,
        paddingVertical: 12,
        marginTop: 30,
        marginHorizontal: 15

    },
    splashPaginations: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    splashPagination: {
        backgroundColor: "#fff",
        width: 10,
        height: 1
    }

});