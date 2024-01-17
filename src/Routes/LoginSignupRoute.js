import { StyleSheet, Text, View, Image, Animated, KeyboardAvoidingView, Platform, Keyboard, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef, Children, cloneElement } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';

const Tab = createMaterialTopTabNavigator();

function LoginSignupTabBar({ state, descriptors, navigation }) {
    return (
        <View style={[styles.card, styles.elevation]}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/ChefLogo.jpg')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.buttonContainer}>
                {/* You can access the screens (state.routes) and their descriptors here */}
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                    const isFocused = state.index === index;

                    const animatedWidth = useRef(
                        new Animated.Value(isFocused ? 0 : 100)
                    ).current;

                    const animateWidth = () => {
                        Animated.timing(animatedWidth, {
                            toValue: isFocused ? 100 : 0,
                            duration: 300, // 0.3 seconds
                            useNativeDriver: false, // Required for width animation
                        }).start();
                    };

                    useEffect(() => {
                        animateWidth();
                    }, [isFocused]);

                    return (
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={{ alignItems: "center", width: "30%", }} key={route.key}>
                            <Text style={styles.button} onPress={() => navigation.navigate(route.name)}>
                                {label}
                            </Text>
                            <Animated.View
                                style={[
                                    styles.indicator,
                                    {
                                        width: animatedWidth.interpolate({
                                            inputRange: [0, 100],
                                            outputRange: ['0%', '100%'],
                                        }),
                                    },
                                ]}
                            />
                        </KeyboardAvoidingView>
                    );
                })}
            </View>
        </View>
    );
}

export default function LoginSignupRoute() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <NavigationContainer>
                <Tab.Navigator tabBar={(props) => <LoginSignupTabBar {...props} />}>
                    <Tab.Screen name="Login" component={LoginScreen} />
                    <Tab.Screen name="Signup" component={SignupScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: '100%',
        position: "relative",
        height: "35%",
        //top: 0,
        zIndex: 1,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        //backgroundColor: "grey"
    },
    logoContainer: {
        //backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    logo: {
        alignSelf: "center",
        height: '70%',
        width: "30%"
    },
    button: {
        fontSize: 18,
        //fontFamily: toBeAddedSoon
        fontWeight: "600",
        marginBottom: 15,
    },
    indicatorContainer: {
        width: "30%",
        alignItems: "center",
        transition: "0.3"
    },
    indicator: {
        backgroundColor: "#FA4A0C",
        flexDirection: "column",
        borderRadius: 40,
        marginTop: -1,
        height: 3,
        position: 'absolute', // Add this line
        bottom: 0,
    }

})