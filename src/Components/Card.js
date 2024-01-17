import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({ tag, title, topNews = true }) {
    return (
        <View style={topNews ? styles.container : styles.containerRN}>
            <View style={topNews ? styles.image : styles.imageRN} />
            <View style={topNews ? { marginLeft: 10 } : { marginLeft: 5 }}>
                <Text style={topNews ? styles.tag : styles.tagRN}>{tag}</Text>
                <Text style={topNews ? styles.title : styles.titleRN}>{title}</Text>
            </View>
        </View>
    )
}

//RN - Recent News
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerRN: {
        flex: 1,
    },
    image: {
        height: 200,
        width: "100%",
        backgroundColor: "#405a",
        borderRadius: 20
    },
    imageRN: {
        height: 94,
        width: "100%",
        backgroundColor: "#405a",
        borderRadius: 12
    },
    title: {
        fontWeight: "600",
        fontSize: 23,
        fontFamily: "SF-Pro-Rounded-Bold"
    },
    titleRN: {
        fontWeight: "600",
        fontSize: 14,
        width: 170,
        fontFamily: "SF-Pro-Rounded-Bold"
    },
    tag: {
        fontFamily: "Rubik-Medium",
        marginTop: 8,
        fontSize: 14,
        fontWeight: "600",
        color: "#405a",
        marginBottom: -5
    },
    tagRN: {
        fontFamily: "Rubik-Medium",
        marginTop: 8,
        fontSize: 13,
        fontWeight: "600",
        color: "#405a",
        marginBottom: -3
    }
})