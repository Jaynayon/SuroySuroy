import { Text, View, StyleSheet, StatusBar, TextInput, Pressable } from 'react-native';
import React, { useState, useEffect, useRef, Children, cloneElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass as MagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

function SearchComponent({ placeholder }) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} />
            <FontAwesomeIcon icon={MagnifyingGlass} color={"#B9B9B9"} size={20} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F8F8F8", //F8F8F8
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 52,
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 16,
    },
    input: {
        fontFamily: "SF-Pro-Text-Regular",
        width: "88%",
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 20,
        opacity: 0.6
    }
})
export default SearchComponent;