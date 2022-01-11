import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomTabs from "../components/bottom-tabs/BottomTabs";
import CourseSlider from "../components/course/CourseSlider";

const Course = () => {
  return (
    <SafeAreaView >
        <View style={styles.course}>
            <Text style={styles.courseTitle}>Choose what type of meditation you want to try today</Text>
            <View style={styles.courseSlider}>
                <CourseSlider/>
            </View>
        </View>
        <BottomTabs/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    course: {
        paddingHorizontal: 20
    },
    courseTitle: {
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 28,
        color: "#D49FDA",
        textAlign: "center",
        marginVertical: 38,
    },
    courseSlider: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        maxHeight: 600,
    },
});


export default Course;
