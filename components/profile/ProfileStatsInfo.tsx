import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import STYLES from "../../styles/styles";

const ProfileStatsInfo = () => {
  return (
    <>
        <View style={styles.profileStatsInfoItem}>
            <Text style={styles.profileStatsInfoText}>You are
                    <Text style={STYLES.link}> more productive than 57% </Text>
            of Cami users </Text>
        </View>

        <View style={styles.profileStatsInfoItem}>
            <Text style={styles.profileStatsInfoText}>Your favourite time for meditation is from<Text style={STYLES.link}> 9 to 11 AM </Text>   </Text>
        </View>

        <View style={styles.profileStatsInfoItem}>
            <Text style={styles.profileStatsInfoText}>Your favourite time for concentration is from <Text style={STYLES.link}> 12  to 4 PM  </Text></Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    profileStatsInfoItem: {
        marginVertical: 20
    },
    profileStatsInfoText: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 20,
    },
})

export default ProfileStatsInfo;
