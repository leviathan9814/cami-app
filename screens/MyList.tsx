import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Button, ScrollView} from "react-native";
import BottomTabs from "../components/bottom-tabs/BottomTabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import STYLES from "../styles/styles";
import MyListItem from "../components/course/MyListItem";
import { TouchableOpacity } from "react-native-gesture-handler";

const MyList = ({navigation}: any) => {
  return (
    <SafeAreaView >
        <ScrollView style={styles.myList}>
          <View style={styles.myListHeader}>
            <AntDesign
              name="arrowleft"
              size={30}
              style={{alignSelf: "center", color: "#5A5A5A"}}
              onPress={() => navigation.navigate('FocusedMeditation')}
            />
          </View>
          <Text style={STYLES.title}>My List</Text>
          <TouchableOpacity>
            <Text style={styles.myListTabs}>Favorite (3)</Text>
          </TouchableOpacity>
          <View>
            <MyListItem/>
          </View>
        </ScrollView>
        <BottomTabs/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  myList: {
    paddingHorizontal: 20
  },
  myListHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  myListTabs: {
    marginBottom: 40, 
    fontSize: 18, 
    fontWeight: "400"
  },
});


export default MyList;
