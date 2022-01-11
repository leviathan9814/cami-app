import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Button} from "react-native";
import BottomTabs from "../components/bottom-tabs/BottomTabs";
import TimerTitle from "../components/timer/TimerTitle";

const Timer = () => {
  return (
    <SafeAreaView >
        <View style={styles.timer}>
            <View style={styles.timerTitle}>
                <TimerTitle/>
            </View>
        </View>
        <BottomTabs/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    timer: {
        paddingHorizontal: 20
    },
    timerTitle: {
        position: "absolute"
    },

});


export default Timer;
