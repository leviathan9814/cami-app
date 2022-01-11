import React from "react";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import LogoImg from "../assets/logo/logo.svg";
import STYLES from "../styles/styles";
import { Formik } from 'formik'

const SignUp = ({navigation}: any) => {

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
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={STYLES.inputContainer}>
                <TextInput
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                    style={STYLES.input}
                    placeholder="First Name"
                />
                <TextInput
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                    style={STYLES.input}
                    placeholder="Last Name"
                />
                <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={STYLES.input}
                    placeholder="Email"
                />
                <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={STYLES.input}
                    placeholder="Password"
                />
                <View style={STYLES.btnContainer}>
                    <TouchableOpacity 
                        style={[STYLES.launchBtn, {backgroundColor: "#C378CB", marginTop: 10}]} 
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={[STYLES.textBtn, { color: "#fff"}]}>Sign Up</Text>
                    </TouchableOpacity>
                 </View>
            </View>
            )}
        </Formik>
        <View style={{marginTop: 100, flexDirection: "row"}}>
            <Text>Do you have an account? </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={{color: "#C378CB"}}>Sign In!</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};


export default SignUp;
