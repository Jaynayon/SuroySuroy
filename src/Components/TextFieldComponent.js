import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

function TextFieldComponent(props) {

    const handleTextChange = (newText) => {
        // Remove spaces from the input
        const filteredText = newText.replace(/\s/g, '');
        props.setter(filteredText);
    };

    const handlePhoneTextChange = (newText) => {
        // Remove spaces and non-numeric characters from the input
        const filteredText = newText.replace(/[^0-9]/g, '');
        props.setter(filteredText);
    };

    return (
        <View>
            <Text style={styles.inputName}>
                {props.title}
            </Text>
            {props.secureTextEntry ? (
                <TextInput
                    style={styles.inputText}
                    onChangeText={handleTextChange}
                    value={props.value}
                    secureTextEntry={true}
                />
            ) : (props.keyboardType == 'numeric' ? (
                <TextInput
                    style={styles.inputText}
                    onChangeText={handlePhoneTextChange}
                    value={props.value}
                    keyboardType='numeric'
                />
            ) : (
                <TextInput
                    style={styles.inputText}
                    onChangeText={handleTextChange}
                    value={props.value}
                />
            )

            )}
        </View>
    );
}

const styles = StyleSheet.create({
    inputName: {
        fontWeight: "600",
        color: "#919191",
        marginTop: "10%"
    },
    inputText: {
        fontSize: 17,
        fontWeight: "600",
        paddingBottom: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },
})

export default TextFieldComponent;