import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import TextFieldComponent from '../Components/TextFieldComponent'
import React, { useState, useEffect, useRef } from 'react';

export default function SignupScreen() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    function btnSignup() {
        console.log("Test")
    }

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextFieldComponent
                        title={"Name"}
                        setter={setName}
                        value={name}
                    />
                    <TextFieldComponent
                        title={"Phone"}
                        setter={setPhone}
                        value={phone}
                        keyboardType={'numeric'}
                    />
                    <TextFieldComponent
                        title={"Email address"}
                        setter={setEmailAddress}
                        value={emailAddress}
                    />
                    <TextFieldComponent
                        title={"Password"}
                        setter={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.createContainer} onPress={btnSignup}>
                    <Text style={styles.createText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "75%",
        marginTop: "5%"
    },
    container: {
        alignItems: "center",
        //marginTop: "70%" //Compensate space for absolute position Top Navigation Tab
    },
    createContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "75%",
        backgroundColor: "#FA4A0C",
        borderRadius: 30,
        height: 60, //"13%"
        marginTop: "13%",
        marginBottom: "15%"
    },
    createText: {
        fontWeight: "500",
        fontSize: 15,
        color: "#FFF"
    },
})