import { StyleSheet, Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import TextFieldComponent from '../Components/TextFieldComponent'
import React, { useState, useEffect, useRef } from 'react';

export default function Test1() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    function btnLogin() {
        console.log("Test")
    }

    return (
        <ScrollView style={{ backgroundColor: "white", }}>
            <View style={styles.container}>
                <View style={styles.input}>
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
                    <Text style={styles.forgotPassword}>
                        Forgot password?
                    </Text>
                </View>
                <TouchableOpacity style={styles.createContainer} onPress={btnLogin}>
                    <Text style={styles.createText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
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
    forgotPassword: {
        fontWeight: "600",
        color: "#FA4A0C",
        marginTop: "9%"
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