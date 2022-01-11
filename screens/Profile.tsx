import React from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import BottomTabs from "../components/bottom-tabs/BottomTabs";
import ProfileFavoriteMeditation from "../components/profile/ProfileFavoriteMeditation";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileStatsInfo from "../components/profile/ProfileStatsInfo";

const Profile = () => {
  return (
    <SafeAreaView >
        <ScrollView>
          <View style={styles.profile}>
            <TouchableOpacity>
              <View>
                  <Entypo
                      name="dots-three-horizontal"
                      size={25}
                      style={{alignSelf: "center", color: "#5A5A5A", alignSelf: "flex-end"}}
                  />
              </View>
            </TouchableOpacity>
            <View style={styles.profileInfo}>
              <ProfileInfo/>
            </View>
            <Divider
                width={0.5}
                orientation="vertical"
                style={{ marginVertical: 33 }}
            />
            <View style={styles.profileStats}>
              <ProfileStats/>
            </View>
            <View style={styles.profileFavoriteMeditation}>
              <ProfileFavoriteMeditation/>
            </View>
            <View style={styles.profileStatsInfo}>
              <ProfileStatsInfo/>
            </View>
          </View>
        </ScrollView>
        <BottomTabs/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  profile: {
    flexDirection: "column", 
    justifyContent: "center", 
    paddingHorizontal: 20
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileFavoriteMeditation: {
    marginVertical: 22
  },
  profileStatsInfo: {
    flexDirection: "column",
  },
});


export default Profile;
