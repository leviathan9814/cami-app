import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import {StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'
import CourseSliderImg1 from "../../assets/course/course-img1.svg";
import CourseSliderImg2 from "../../assets/course/course-img2.svg";
import { useNavigation } from '@react-navigation/native';
 
const CourseSlider = () => {

    const navigation = useNavigation();

    return (
      <>
        <Swiper
            loop
            activeDot={
                <View style={{backgroundColor: '#D49FDA', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
            }
           >
            <View style={styles.sliderItem}>
                <CourseSliderImg1 style={styles.sliderImg}/>
                <View style={styles.sliderText}>
                    <Text style={styles.sliderTitle}>Focused meditation</Text>
                    <Text style={styles.sliderDescription}>Focused meditation involves concentration using any of the five senses.</Text>
                </View>
                <TouchableOpacity style={styles.courseBtn}
                    onPress={() => navigation.navigate("FocusedMeditation")}
                >
                    <Text style={{color: "#fff"}}>Choose</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sliderItem}>
                <CourseSliderImg2 style={styles.sliderImg}/>
                <View style={styles.sliderText}>
                    <Text style={styles.sliderTitle}>Focused meditation</Text>
                    <Text style={styles.sliderDescription}>Focused meditation involves concentration using any of the five senses.</Text>
                </View>
                <TouchableOpacity style={styles.courseBtn}
                    onPress={() => navigation.navigate("FocusedMeditation")}
                >
                    <Text style={{color: "#fff"}}>Choose</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sliderItem}>
                <CourseSliderImg1 style={styles.sliderImg}/>
                <View style={styles.sliderText}>
                    <Text style={styles.sliderTitle}>Focused meditation</Text>
                    <Text style={styles.sliderDescription}>Focused meditation involves concentration using any of the five senses.</Text>
                </View>
                <TouchableOpacity style={styles.courseBtn}
                    onPress={() => navigation.navigate("FocusedMeditation")}
                >
                    <Text style={{color: "#fff"}}>Choose</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sliderItem}>
                <CourseSliderImg2 style={styles.sliderImg}/>
                <View style={styles.sliderText}>
                    <Text style={styles.sliderTitle}>Focused meditation</Text>
                    <Text style={styles.sliderDescription}>Focused meditation involves concentration using any of the five senses.</Text>
                </View>
                <TouchableOpacity style={styles.courseBtn}
                    onPress={() => navigation.navigate("FocusedMeditation")}
                >
                    <Text style={{color: "#fff"}}>Choose</Text>
                </TouchableOpacity>
            </View>
        </Swiper>
      </>
    )
};

const styles = StyleSheet.create({
    sliderItem: {
        justifyContent: "center",
        alignItems: "center",
    },
    sliderImg: {
        width: 190,
        height: 195,
        shadowColor: "black",
        shadowOffset: { height: 5},
        shadowOpacity: 0.2,
    },
    sliderText: {
        width: 200,
    },
    sliderTitle: {
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 20,
        textAlign: "center",
    },
    sliderDescription: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 20,
        textAlign: "center",
        marginVertical: 38
    },
    courseBtn: {
        backgroundColor: "#D49FDA",
        justifyContent: "center",
        alignItems: "center",
        width: 130,
        height: 30,
        borderRadius: 20,
    },
});

export default CourseSlider;
 