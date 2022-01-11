import React from 'react'
import {StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CourseSliderImg1 from "../../assets/course/course-img1.svg";
import { useNavigation } from '@react-navigation/native';
 
const SelectedCourseItem = () => {

    const navigation = useNavigation();

    return (
      <>
        <View style={styles.selectedCourseItem}>
            <CourseSliderImg1 style={styles.selectedCourseImg}/>
            <View style={styles.selectedCourseText}>
                <Text style={styles.selectedCourseTitle}>Focused meditation for beginners</Text>
                <Text style={styles.courseAuthor}>by Jesica Kylie</Text>
                <Text style={styles.selectedCourseDescription}>Focused meditation involves concentration using any of the five senses.</Text>
            </View>
            <View style={styles.selectedCourseTabs}>
                <TouchableOpacity>
                    <Text style={styles.selectedCourseTabsItem}>5 m.</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.selectedCourseTabsItem, styles.selectedCourseTabsActiveItem]}>10 m.</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.selectedCourseTabsItem}>20 m.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.courseBtn}
                onPress={() => navigation.navigate("Meditation")}
            >
                <Text style={{color: "#fff"}}>Start</Text>
            </TouchableOpacity>
        </View>

      </>
    )
};

const styles = StyleSheet.create({
    selectedCourseItem: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    selectedCourseImg: {
        width: 190,
        height: 195,
        shadowColor: "black",
        shadowOffset: { height: 5},
        shadowOpacity: 0.2,
    },
    selectedCourseText: {
        width: 200,
    },
    selectedCourseTitle: {
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 20,
        textAlign: "center",
    },
    courseAuthor: {
        color: "#CCC", 
        fontSize: 12, 
        fontWeight: "400", 
        textAlign: "center",
        marginVertical: 5,
    },
    selectedCourseDescription: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 20,
        textAlign: "center",
    },
    selectedCourseTabs: {
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 130,
        height: 25,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#D49FDA",
        borderRadius: 63,
        paddingHorizontal: 10,
        marginVertical: 35,
    },
    selectedCourseTabsItem: {
        fontSize: 11,
        fontWeight: "400",
        color: "#D49FDA"
    },
    selectedCourseTabsActiveItem: {
        position: "absolute",
        top: -12,
        left: -20,
        backgroundColor: "#D49FDA",
        color: "#fff",
        height: 25,
        width: 45,
        paddingTop: 5,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    courseBtn: {
        backgroundColor: "#D49FDA",
        justifyContent: "center",
        alignItems: "center",
        width: 142,
        height: 32,
        borderRadius: 20,
        marginBottom: 150
    },
});

export default SelectedCourseItem;
 