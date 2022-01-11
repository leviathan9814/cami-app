import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MeditationImg1 from "../../assets/profile/profile-img1.svg";
import MeditationImg2 from "../../assets/profile/profile-img2.svg";
import MeditationImg3 from "../../assets/profile/profile-img3.svg";

const ProfileFavoriteMeditation = () => {
  return (
    <>
       <Text style={styles.profileFavoriteMeditationTitle}>Favorite types of meditation</Text>
       <View style={styles.meditationType}>
            <View style={styles.meditationTypeItem}>
                <MeditationImg1 style={styles.meditationTypeImg}/>
                <Text style={styles.meditationTypeTitle}>Focused medatation</Text>
            </View>

            <View style={styles.meditationTypeItem}>
                <TouchableOpacity>
                    <MeditationImg2 style={styles.meditationTypeImg}/>
                    <Text style={styles.meditationTypeTitle}>Mantra medatation</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.meditationTypeItem}>
                <TouchableOpacity>
                    <MeditationImg3 style={styles.meditationTypeImg}/>
                    <Text style={styles.meditationTypeTitle}>Vizualization medatation</Text>
                </TouchableOpacity>
            </View>
       </View>

    </>
  );
};

const styles = StyleSheet.create({
    profileFavoriteMeditationTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 20,
    },
    meditationType: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
    },
    meditationTypeItem: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeight: 140,
        marginBottom: 20
    },
    meditationTypeImg: {
        marginBottom: 7
    },
    meditationTypeTitle: {
        maxWidth: 90,
        fontSize: 11,
        fontWeight: "400",
        textAlign: "center",
        lineHeight: 20,
    },
})

export default ProfileFavoriteMeditation;
