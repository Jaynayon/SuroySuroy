import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle as OnlineIcon } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMap as MapIcon } from '@fortawesome/free-regular-svg-icons/faMap'

function HeaderLocationComponent(props) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.alignItems}>
                    <FontAwesomeIcon style={styles.onlineIcon} icon={OnlineIcon} color={"#129717"} size={20} />
                    <View>
                        <Text style={styles.city}>Cebu City</Text>
                        <Text style={styles.street}>947 Katipunan St</Text>
                        <Text style={styles.location}>Current location</Text>
                    </View>
                </View>
                <FontAwesomeIcon style={styles.mapIcon} icon={MapIcon} color={"#FA4A0C"} size={37} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    alignItems: {
        flexDirection: "row",
        alignItems: "center"
    },
    onlineIcon: {
        marginRight: 12,
        marginBottom: -5
    },
    mapIcon: {
        marginRight: 10
    },
    city: {
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: 30,
        marginBottom: -13,
        letterSpacing: -0.5
    },
    street: {
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: 14,
        fontWeight: "600",
        color: "#1E1D1D",
        opacity: 0.5,
        bottom: 3,
        marginBottom: -7
    },
    location: {
        fontSize: 12,
        color: "#1E1D1D",
        opacity: 0.5,
        bottom: 3,
        fontFamily: 'SF-Pro-Text-Regular',
        marginBottom: -5
    }
})

export default HeaderLocationComponent;