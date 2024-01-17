import {
    StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, KeyboardAvoidingView,
    ScrollView, FlatList
} from 'react-native';
import React, { useState, useEffect, useRef, Children, cloneElement } from 'react';
import TabsComponent from '../Components/TabsComponent';
import SearchComponent from '../Components/SearchComponent';
import HeaderLocationComponent from '../Components/HeaderLocationComponent';
import Card from '../Components/Card';
//import FontAwesome from '@expo/vector-icons/FontAwesome'

function DashboardScreen(props) {
    const data = [
        { title: 'Cebu PUVs ordered to return to original routes Monday', tag: 'Travel' },
        { title: 'test2', tag: 'Travel' },
        { title: 'test3', tag: 'Travel' },
        { title: 'test4', tag: 'Travel' },
        { title: 'test5', tag: 'Travel' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={"white"} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.padding}>
                    <View style={styles.margin}>
                        <HeaderLocationComponent />
                        <SearchComponent placeholder={'Search news'} />
                    </View>
                </View>
                <View style={styles.topNewsContainer}>
                    <Text style={styles.date}>Monday, July 24,2023</Text>
                    <Text style={styles.topNewsHeader}>Top News</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={styles.topNewsCard}>
                                <Card title={item.title} tag={item.tag} />
                            </View>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        snapToInterval={363} // Adjust this based on your content size
                        snapToAlignment={'start'} // You can use 'center' or 'end' as well
                    />
                </View>
                <View style={styles.breakpointMargin}>
                    <View style={styles.breakpoint} />
                </View>
                <View style={styles.recentNewsMargin}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={styles.recentNewsHeader}>Recent News</Text>
                        <Text style={styles.seeAllHeader}>See All</Text>
                    </View>
                    <View style={styles.recentNewsContainer}>
                        <View style={styles.recentNewsCard}>
                            <Card title={'Siomai Festival gisaulog sa Tisa'} tag={'Festivals'} topNews={false} />
                        </View>
                        <View style={styles.recentNewsCard}>
                            <Card title={"'Falcon' gains more strength, may become typhoon on Sunday"} tag={'Environment'} topNews={false} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TabsComponent />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ //justifyContent follows the flexDirection
    container: {
        flex: 1
    },
    margin: {
        marginTop: 5,
        marginRight: 15,
        marginLeft: 15
    },
    padding: {
        paddingTop: 5,
        paddingRight: 5,
        paddingLeft: 5
    },
    date: {
        fontFamily: "SF-Pro-Text-Regular",
        marginLeft: 5,
        fontSize: 12,
        marginBottom: -5
    },
    topNewsHeader: {
        marginLeft: 5,
        fontSize: 25,
        fontWeight: "600",
        fontFamily: "SF-Pro-Rounded-Bold",
    },
    topNewsContainer: {
        flex: 1,
        marginLeft: 20,
    },
    topNewsCard: {
        height: 300,
        width: 363,
        paddingRight: 15
    },
    breakpoint: {
        width: "100%",
        height: 2,
        backgroundColor: "#EEEAEA"
    },
    breakpointMargin: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5
    },
    recentNewsHeader: {
        marginLeft: 5,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "600"
    },
    recentNewsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 295,
    },
    recentNewsCard: {
        width: 170,
        //backgroundColor: "#a32"
    },
    recentNewsMargin: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20
    },
    seeAllHeader: {
        fontSize: 14,
        fontWeight: "600",
        marginRight: 15,
        marginBottom: 10
    }
})

export default DashboardScreen;