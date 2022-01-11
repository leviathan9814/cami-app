import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const MyListItem = () => {

    const navigation = useNavigation();

  return (
    <>
        <TouchableOpacity onPress={() => navigation.navigate("SelectedCourse")}>
            <View style={styles.meditationItem}>
                <View>
                    <Image
                        source={require("../../assets/myList/my-list-img1.png")}
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
        </TouchableOpacity>
        <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginVertical: 20 }}
        />

        <TouchableOpacity>
            <View style={styles.meditationItem}>
                <View>
                    <Image
                        source={require("../../assets/myList/my-list-img2.png")}
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
                        <Text style={styles.titleStyle}>Mantra meditation </Text>
                    </TouchableOpacity>
                    <View style={styles.meditationAuthor}>
                            <FontAwesome
                                name="user"
                                size={15}
                                style={{alignSelf: "center", marginRight: 5, color: "#CCCCCC"}}
                            />
                        <Text style={{color: "#CCCCCC"}}>Mark Thory</Text>
                    </View>
                    <Text style={{fontSize: 14}}>This type of meditation uses a repetitive sound to clear the mind...</Text>
                </View>
            </View>
        </TouchableOpacity>
        <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginVertical: 20 }}
        />

        <TouchableOpacity>
            <View style={styles.meditationItem}>
                <View>
                    <Image
                        source={require("../../assets/myList/my-list-img3.png")}
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
                        <Text style={styles.titleStyle}>Progressive relaxation</Text>
                    </TouchableOpacity>
                    <View style={styles.meditationAuthor}>
                            <FontAwesome
                                name="user"
                                size={15}
                                style={{alignSelf: "center", marginRight: 5, color: "#CCCCCC"}}
                            />
                        <Text style={{color: "#CCCCCC"}}>Kristy Jo</Text>
                    </View>
                    <Text style={{fontSize: 14}}>Practice aimed at reducing tension in the body and promoting relaxation.</Text>
                </View>
            </View>
        </TouchableOpacity>
        <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginVertical: 20 }}
        />

    <TouchableOpacity>
            <View style={styles.meditationItem}>
                <View>
                    <Image
                        source={require("../../assets/myList/my-list-img1.png")}
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
                        <Text style={styles.titleStyle}>Mantra meditation</Text>
                    </TouchableOpacity>
                    <View style={styles.meditationAuthor}>
                            <FontAwesome
                                name="user"
                                size={15}
                                style={{alignSelf: "center", marginRight: 5, color: "#CCCCCC"}}
                            />
                        <Text style={{color: "#CCCCCC"}}>Kristy Jo</Text>
                    </View>
                    <Text style={{fontSize: 14}}>Practice aimed at reducing tension in the body and promoting relaxation.</Text>
                </View>
            </View>
        </TouchableOpacity>
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


export default MyListItem;