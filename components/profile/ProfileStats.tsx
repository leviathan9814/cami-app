import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const ProfileStats = () => {
  return (
    <>
        <View style={styles.profileStatItem}>
            <TouchableOpacity>
                <Text style={styles.profileStatNum}>22</Text>
                <Text style={styles.profileStatText}>Following</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.profileStatItem}>
            <Text style={styles.profileStatNum}>39</Text>
            <Text style={styles.profileStatText}>Hours of concentration </Text>
        </View>

        <View style={styles.profileStatItem}>
            <Text style={styles.profileStatNum}>11.5</Text>
            <Text style={styles.profileStatText}>Hours spent meditating</Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    profileStatItem: {
        backgroundColor: 'rgba(245, 219, 248, 0.4)',
        color: "#000",
        width: 90,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    profileStatNum: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center"
    },
    profileStatText: {
        fontSize: 11,
        fontWeight: "400",
        marginTop: 7,
        textAlign: "center"
    },
})

export default ProfileStats;
