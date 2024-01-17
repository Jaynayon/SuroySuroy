import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextFieldInput from './TextFieldInput';

function Form({ type, name, setName, phone, setPhone, emailAddress, setEmailAddress, password, setPassword }) {
    /*const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");*/

    async function btnLogin() {
        //let verify = await verifyUser(emailAddress, password)
        //verify ? console.log('true') : console.log(false);
        setShowSnackbar(true)
        setTimeout(() => {
            setShowSnackbar(false)
        }, 4000);
    }

    if (type == "Login")
        return (
            <>
                <View style={styles.input}>
                    <TextFieldInput
                        title={"Email address"}
                        setter={setEmailAddress}
                    />
                    <TextFieldInput
                        title={"Password"}
                        setter={setPassword}
                    />
                    <Text style={styles.forgotPassword}>
                        Forgot password?
                    </Text>
                </View>
                <TouchableOpacity style={styles.createContainer} onPress={btnLogin}>
                    <Text style={styles.createText}>Login</Text>
                </TouchableOpacity>
            </>

        );
    else if (type == "Signup")
        return (
            <>
                <View style={styles.input}>
                    <TextFieldInput
                        title={"Name"}
                        setter={setName}
                    />
                    <TextFieldInput
                        title={"Phone"}
                        setter={setPhone}
                    />
                    <TextFieldInput
                        title={"Email address"}
                        setter={setEmailAddress}
                    />
                    <TextFieldInput
                        title={"Password"}
                        setter={setPassword}
                    />
                </View>
                <TouchableOpacity style={styles.createContainer}>
                    <Text style={styles.createText}>Create Account</Text>
                </TouchableOpacity>
            </>

        );
}

const styles = StyleSheet.create({
    input: {
        width: "75%",
        marginTop: "5%"
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
    forgotPassword: {
        fontWeight: "600",
        color: "#FA4A0C",
        marginTop: "9%"
    }
})

export default Form;