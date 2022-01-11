import React from "react";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import LogoImg from "../assets/logo/logo.svg";
import STYLES from "../styles/styles";
import { Formik } from 'formik'

const SignIn = ({navigation}: any) => {

    const [text, setText] = React.useState("Your email or phone number");
    const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={STYLES.container}>
        <View>
            <LogoImg height={140} width={140}/>
        </View>
        <Text style={STYLES.launchTitle}>CAMI</Text>
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={STYLES.inputContainer}>
                <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={STYLES.input}
                    placeholder="Your email or phone number"
                />
                <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={STYLES.input}
                    placeholder="Your password"
                />
                <TouchableOpacity>
                    <Text style={{ color: "#C378CB", fontSize: 15,}}>Forgot password</Text>
                </TouchableOpacity>
                <View style={STYLES.btnContainer}>
                    <TouchableOpacity 
                        style={[STYLES.launchBtn, {backgroundColor: "#C378CB", marginTop: 10}]} 
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Text style={[STYLES.textBtn, { color: "#fff"}]}>Log In</Text>
                    </TouchableOpacity>
                 </View>
            </View>
            )}
        </Formik>
        <View style={{marginTop: 100, flexDirection: "row"}}>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={{color: "#C378CB"}}>Sign Up!</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};


export default SignIn;
