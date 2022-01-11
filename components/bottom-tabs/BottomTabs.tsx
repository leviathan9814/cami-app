import React from "react";
import {View, TouchableOpacity} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';

const BottomTabs = () => {

    const navigation = useNavigation();

    return (
        <View style={{
            flexDirection: "row",
            marginHorizontal: 30,
            justifyContent: "space-between"
        }}>
            <TouchableOpacity>
                <View>
                    <Entypo
                        name="calendar"
                        size={30}
                        style={{alignSelf: "center"}}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                <View>
                    <Entypo
                        name="flower"
                        size={30}
                        style={{alignSelf: "center"}}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Timer')}>
                <View>
                    <Entypo
                        name="stopwatch"
                        size={30}
                        style={{alignSelf: "center"}}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View>
                    <Entypo
                        name="user"
                        size={30}
                        style={{alignSelf: "center"}}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default BottomTabs;