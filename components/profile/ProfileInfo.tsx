import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const ProfileInfo = () => {
  return (
    <>
        <Image
            source={require("../../assets/profile/avatar.png")}
        />
        <View style={styles.userDescription}>
            <Text style={styles.userName}>Kate</Text>
            <Text style={styles.userJoined}>
                <Entypo
                    name="calendar"
                    size={13}
                    style={{alignSelf: "center"}}
                />
                Joined June 2020
            </Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    userDescription: {
        lineHeight: 20,
        marginLeft: 50
    },
    userName: {
        fontSize: 30,
        fontWeight: "700",
    },
    userJoined: {
        fontSize: 14,
        fontWeight: "400",
        color: "#A1A1A1",
    }

})

export default ProfileInfo;
