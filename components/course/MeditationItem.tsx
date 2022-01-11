import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

const MeditationItem = () => {

  return (
    <>
        <View style={styles.meditationItem}>
            <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 8}}
                fillColor="green"
                isChecked={false}
            />
            <View>
                <Image
                    source={require("../../assets/meditationItem/meditationItem1.png")}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 18,
                        marginRight: 15
                    }}
                />
            </View>
            <View style={{ width: 200, justifyContent: "space-evenly" }}>
                <TouchableOpacity>
                    <Text style={styles.titleStyle}>Focused meditation..</Text>
                </TouchableOpacity>
                <View style={styles.meditationAuthor}>
                        <FontAwesome
                            name="user"
                            size={15}
                            style={{alignSelf: "center", marginRight: 5, color: "#CCCCCC"}}
                        />
                    <Text style={{color: "#CCCCCC"}}>Jesica Kylie</Text>
                </View>
                <Text style={{fontSize: 14}}>Focused meditation involves concentration using any of the five senses.</Text>
            </View>
        </View>
        <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginVertical: 20 }}
        />

        <View style={styles.meditationItem}>
            <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 8}}
                fillColor="green"
                isChecked={false}
            />
            <View>
                <Image
                    source={require("../../assets/meditationItem/meditationItem2.png")}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 18,
                        marginRight: 15
                    }}
                />
            </View>
            <View style={{ width: 200, justifyContent: "space-evenly" }}>
                <TouchableOpacity>
                    <Text style={styles.titleStyle}>24 days meditation..</Text>
                </TouchableOpacity>
                <View style={styles.meditationAuthor}>
                        <FontAwesome
                            name="user"
                            size={15}
                            style={{alignSelf: "center", marginRight: 5, color: "#CCCCCC"}}
                        />
                    <Text style={{color: "#CCCCCC"}}>Stan Jakwell</Text>
                </View>
                <Text style={{fontSize: 14}}>When you're stressed, overwhelmed, or distracted, you can regain..</Text>
            </View>
        </View>
        <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginVertical: 20 }}
        />

        <View style={styles.meditationItem}>
            <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 8}}
                fillColor="green"
                isChecked={false}
            />
            <View>
                <Image
                    source={require("../../assets/meditationItem/meditationItem3.png")}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 18,
                        marginRight: 15
                    }}
                />
            </View>
            <View style={{ width: 200, justifyContent: "space-evenly" }}>
                <TouchableOpacity>
                    <Text style={styles.titleStyle}>5 Steps to Focused..</Text>
                </TouchableOpacity>
                <View style={styles.meditationAuthor}>
                        <FontAwesome
                            name="user"
                            size={15}
                            style={{alignSelf: "center", marginRight: 5, color: "#CCCCCC"}}
                        />
                    <Text style={{color: "#CCCCCC"}}>Kristy Jo</Text>
                </View>
                <Text style={{fontSize: 14}}>Begin with five-minute sessions and work your way up to longer periods as you become more comfortable.</Text>
            </View>
        </View>
        <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginVertical: 20 }}
        />

        <View style={styles.meditationItem}>
            <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 8}}
                fillColor="green"
                isChecked={false}
            />
            <View>
                <Image
                    source={require("../../assets/meditationItem/meditationItem4.png")}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 18,
                        marginRight: 15
                    }}
                />
            </View>
            <View style={{ width: 200, justifyContent: "space-evenly" }}>
                <TouchableOpacity>
                    <Text style={styles.titleStyle}>Calm and slow life..</Text>
                </TouchableOpacity>
                <View style={styles.meditationAuthor}>
                        <FontAwesome
                            name="user"
                            size={15}
                            style={{alignSelf: "center", marginRight: 5, color: "#CCCCCC"}}
                        />
                    <Text style={{color: "#CCCCCC"}}>Nick Fury</Text>
                </View>
                <Text style={{fontSize: 14}}>Practice aimed at reducing tension in the body and promoting relaxation.</Text>
            </View>
        </View>
        <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginVertical: 20 }}
        />
    </>
  );
};

const styles = StyleSheet.create({
    meditationItem: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 20
    },
    meditationAuthor: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 3
    },
});


export default MeditationItem;