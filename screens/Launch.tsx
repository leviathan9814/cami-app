import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import LogoImg from "../assets/logo/logo.svg";
import STYLES from "../styles/styles";

const Launch = ({ navigation }: any) => {
  return (
    <View style={STYLES.container}>
       <View>
        <LogoImg height={140} width={140}/>
       </View>
        <Text style={STYLES.launchTitle}>CAMI</Text>
        <View style={STYLES.btnContainer}>
                <TouchableOpacity 
                    style={[STYLES.launchBtn, {backgroundColor: "#e0e0e0"}]}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={STYLES.textBtn}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[STYLES.launchBtn, {backgroundColor: "#C378CB", marginTop: 10}]}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={[STYLES.textBtn, { color: "#fff"}]}>Sign In</Text>
                </TouchableOpacity>
        </View>
    </View>
  );
};

export default Launch;
