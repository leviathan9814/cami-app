import { StyleSheet } from "react-native";

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
		flexDirection: 'column',
		justifyContent: 'center', 
		alignItems: 'center'
    },
    inputContainer: {
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: 335,
        height: 43,
        backgroundColor: "#e0e0e0",
        borderRadius: 20,
        paddingHorizontal: 20,
        fontSize: 17,
        fontWeight: "400",
        color: "#000",
        marginBottom: 20
    },
    launchTitle: {
        fontSize: 30,
        fontWeight: "600",
        color: "#46134B",
        marginTop: 40,
        textAlign: "center",
    },
    btnContainer: {
        marginTop: 80,
    },
    launchBtn: {
        width: 193,
        height: 43,
        padding: 10,
        borderRadius: 30,
    },
    textBtn: {
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
    },
    link: {
        color: "#D49FDA",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: "#D49FDA",
        marginBottom: 40,
    },
});

export default STYLES;