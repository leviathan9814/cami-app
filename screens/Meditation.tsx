import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Animated} from "react-native";
import BottomTabs from "../components/bottom-tabs/BottomTabs";
import AntDesign from "react-native-vector-icons/AntDesign";

const Meditation = ({navigation}: any) => {

  return (
    <SafeAreaView>
        <View style={styles.meditation}>
            <View style={styles.meditationHeader}>
                <AntDesign
                name="arrowleft"
                size={30}
                style={{alignSelf: "center", color: "#5A5A5A"}}
                onPress={() => navigation.navigate('FocusedMeditation')}
                />
            </View>

            <View style={styles.meditationInfo}>
                <Text style={styles.meditationTitle}>Focused meditation for beginners</Text>
                <Text style={styles.meditationAuthor}>by Jesica K.</Text>
            </View>
            <View>

            </View>
        </View>
        <BottomTabs/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    meditation: {
        paddingHorizontal: 20
    },
    meditationHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
    },
    meditationInfo: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    meditationTitle: {
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 29,
        color: "#000",
        textAlign: "center",
    },
    meditationAuthor: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 20,
        color: "#000",
        textAlign: "center",
    },
});


export default Meditation;
