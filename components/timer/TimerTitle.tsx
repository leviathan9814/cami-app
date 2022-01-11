import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import {StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native';
 
const CourseSlider = () => {

    const navigation = useNavigation();

    return (
      <>
        <Swiper
            loop
           >
            <View style={styles.sliderItem}>
                <Text style={styles.sliderTitle}>Work time</Text>
            </View>

            <View style={styles.sliderItem}>
                <Text style={styles.sliderTitle}>Project</Text>
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

    sliderText: {
        width: 200,
    },
    sliderTitle: {
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 20,
        textAlign: "center",
    },
});

export default CourseSlider;
 