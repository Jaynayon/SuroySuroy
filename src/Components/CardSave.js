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

const styles = StyleSheet.create({
    //RN - Recent News
    container: {
        flex: 1,
        height: 300,
        width: 363,
        backgroundColor: "#f249",
        paddingRight: 15,
        borderRadius: 15
    },
    containerRN: {
        flex: 1,
        height: 300,
        width: 363,
        //backgroundColor: "#f249",
        borderRadius: 5
    },
    image: {
        height: 200,
        width: 355,
        backgroundColor: "#405a",
        borderRadius: 20
    },
    imageRN: {
        height: 94,
        width: 170,
        backgroundColor: "#405a",
        borderRadius: 12
    },
    title: {
        fontWeight: "600",
        fontSize: 23,
    },
    titleRN: {
        fontWeight: "600",
        fontSize: 14,
        width: 170,
    },
    tag: {
        marginTop: 8,
        marginBottom: 2,
        fontSize: 14,
        fontWeight: "600",
        color: "#405a"
    },
    tagRN: {
        marginTop: 8,
        marginBottom: 2,
        fontSize: 13,
        fontWeight: "600",
        color: "#405a"
    }
})