import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import Launch from "./screens/Launch";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import Calendar from "./screens/Calendar";
import Course from "./screens/Course";
import FocusedMeditation from "./screens/FocusedMeditation";
import MyList from "./screens/MyList";
import SelectedCourse from "./screens/SelectedCourse";
import Meditation from "./screens/Meditation";
import Timer from "./screens/Timer";

const store = configureStore();

const RootNavigator = () => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Launch" screenOptions={screenOptions}>
                    <Stack.Screen name = "Launch"
                        component = { Launch }
                    /> 
                    <Stack.Screen name = "SignIn"
                        component = { SignIn }
                    />
                    <Stack.Screen name = "SignUp"
                        component = { SignUp }
                    />
                    <Stack.Screen name = "Calendar"
                        component = { Calendar }
                    />
                    <Stack.Screen name = "Profile"
                        component = { Profile }
                    />
                    <Stack.Screen name = "Course"
                        component = { Course}
                    />
                    <Stack.Screen name = "FocusedMeditation"
                        component = { FocusedMeditation }
                    />
                    <Stack.Screen name = "MyList"
                        component = { MyList }
                    />
                    <Stack.Screen name = "SelectedCourse"
                        component = { SelectedCourse }
                    />
                    <Stack.Screen name = "Meditation"
                        component = { Meditation }
                    />
                    <Stack.Screen name = "Timer"
                        component = { Timer }
                    />
                </Stack.Navigator>
            </NavigationContainer>   
        </ReduxProvider>
    );
};

export default RootNavigator;