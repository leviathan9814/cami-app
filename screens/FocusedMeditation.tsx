import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Button, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomTabs from "../components/bottom-tabs/BottomTabs";
import MeditationItem from "../components/course/MeditationItem";
import AntDesign from "react-native-vector-icons/AntDesign";
import STYLES from "../styles/styles";


const FocusedMeditation = ({navigation}: any) => {
  return (
    <SafeAreaView >
        <ScrollView style={styles.meditationContainer}>
          <View style={styles.meditationHeader}>
            <AntDesign
              name="arrowleft"
              size={30}
              style={{alignSelf: "center", color: "#5A5A5A"}}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('MyList')}
            >
              <Text style={{fontSize: 16, fontWeight: "600"}}>My List</Text>
            </TouchableOpacity>
          </View>
          <Text style={STYLES.title}>Focused meditation</Text>
          <View>
              <MeditationItem/>
          </View>
        </ScrollView>
        <BottomTabs/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  meditationContainer: {
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  meditationHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
});


export default FocusedMeditation;
