import React from "react";
import { View, SafeAreaView, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BottomTabs from "../components/bottom-tabs/BottomTabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import SelectedCourseItem from "../components/course/SelectedCourseItem";

const SelectedCourse = ({navigation}: any) => {
  return (
    <SafeAreaView >
        <ScrollView style={styles.selectedCourse}>
            <View style={styles.myListHeader}>
                <AntDesign
                name="arrowleft"
                size={30}
                style={{alignSelf: "center", color: "#5A5A5A"}}
                onPress={() => navigation.navigate('MyList')}
                />
            </View>
          <View>
            <SelectedCourseItem/>
          </View>
        </ScrollView>
        <BottomTabs/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    selectedCourse: {
        paddingHorizontal: 20,
    },
    myListHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
    },
});


export default SelectedCourse;
