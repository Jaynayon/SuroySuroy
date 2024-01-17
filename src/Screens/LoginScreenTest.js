import React, { useState, useEffect, useRef, Children, cloneElement } from 'react';
import TextFieldComponent from '../Components/TextFieldComponent';
import SnackbarComponent from '../Components/SnackbarComponent';
import {
    Animated, Easing, StyleSheet, Text, View, Image, TouchableWithoutFeedback,
    TouchableOpacity, TextInput, ScrollView, BackHandler
} from 'react-native';
//rsf shortcut for react stateless function
function LoginScreen() {
    const [isClicked, setIsClicked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    //console.log('test1')
    //Primarily changes the isClicked state
    //If isClicked is false, Login input is displayed; otherwise, Signup is displayed
    //Sets isAnimating to true for 100 milliseconds and then to false
    const handleClick = (props) => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsClicked(props);
            setIsAnimating(false);
        }, 100);
    }

    useEffect(() => {
        const backAction = () => {
            setIsClicked(false);
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );
        return () => backHandler.remove();
    }, [])

    const Form = () => {
        const fadeInOpacity = useRef(new Animated.Value(0)).current
        const fadeOutOpacity = useRef(new Animated.Value(1)).current
        const { verifyUser, createUser } = require('../Services/RestService')
        const [showSnackbar, setShowSnackbar] = useState(false);
        const [authenticateUser, setAuthenticateUser] = useState(false);
        const [name, setName] = useState("");
        const [phone, setPhone] = useState("");
        const [emailAddress, setEmailAddress] = useState("");
        const [password, setPassword] = useState("");

        useEffect(() => {
            !isAnimating ? fadeIn() : fadeOut();
        }, [isAnimating])

        async function btnLogin() {
            let verify = await verifyUser(emailAddress, password)
            //verify ? console.log('true') : console.log(false);
            setAuthenticateUser(verify);
            setShowSnackbar(true)
            setTimeout(() => {
                setShowSnackbar(false)
            }, 4000);
        }

        async function btnSignup() {
            let response = await createUser(name, emailAddress, password, phone)
            console.log(response);
            //setAuthenticateUser(verify);
            /*setShowSnackbar(true)
            setTimeout(() => {
                setShowSnackbar(false)
            }, 4000);*/
        }

        function fadeIn() {
            Animated.timing(fadeInOpacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }).start();
        }

        function fadeOut() {
            Animated.timing(fadeOutOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }).start();
        }

        return (
            <>
                <ScrollView>
                    {!isClicked ? (
                        <Animated.View style={{
                            alignItems: "center",
                            opacity: !isAnimating ? fadeInOpacity : fadeOutOpacity
                        }}>
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
                        </Animated.View>
                    ) : (
                        <Animated.View style={{
                            alignItems: "center",
                            //Opposite because by then the values of fadeInOpacity 
                            //and fadeOutOpacity has interchanged
                            opacity: isAnimating ? fadeOutOpacity : fadeInOpacity
                        }}>
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
                        </Animated.View>
                    )}
                </ScrollView>
                {showSnackbar ? (
                    emailAddress === "" || password === "" ? (
                        <SnackbarComponent message={"All fields required"} />
                    ) : (
                        authenticateUser ? (
                            <SnackbarComponent message={"Login true"} />
                        ) : (
                            <SnackbarComponent message={"Login false"} />
                        )
                    )
                ) : <></>
                }
            </>
        );
    }

    return (
        <View style={styles.container}>
            <View style={[styles.card, styles.elevation]}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/ChefLogo.jpg')}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <HeaderButtons
                        title="Login"
                        isClicked={!isClicked}
                        handleButtonClick={() => { handleClick(false) }}
                    />
                    <HeaderButtons
                        title="Sign-up"
                        isClicked={isClicked}
                        handleButtonClick={() => { handleClick(true) }}
                    />
                </View>
            </View>
            <Form />
        </View>
    );
}

const HeaderButtons = (props) => {
    const animatedWidth = useRef(
        new Animated.Value(props.isClicked ? 0 : 100)
    ).current;

    const animateWidth = () => {
        Animated.timing(animatedWidth, {
            toValue: props.isClicked ? 100 : 0,
            duration: 300, // 0.3 seconds
            useNativeDriver: false, // Required for width animation
        }).start();
    };

    useEffect(() => {
        animateWidth();
    }, [props.isClicked]);

    return (
        <View style={styles.underlineContainer}>
            <TouchableWithoutFeedback
                onPress={props.handleButtonClick}
            >
                <Text style={styles.button}>
                    {props.title}
                </Text>
            </TouchableWithoutFeedback>
            <Animated.View style={{
                backgroundColor: "#FA4A0C",
                flexDirection: "column",
                borderRadius: 40,
                height: 3,
                marginBottom: -3,
                width: animatedWidth.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0%', '100%'],
                })
            }} />
        </View>
    );
}

//rnss shortcut for stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: "center"
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: "35%",
        width: '100%'
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    logo: {
        height: '80%',
        width: "40%"
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 45,
        paddingHorizontal: 25,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
    },
    button: {
        fontSize: 18,
        //fontFamily: toBeAddedSoon
        fontWeight: "600",
        marginBottom: 15
    },
    buttonClicked: {
        fontSize: 18,
        fontWeight: "600",
        textDecorationLine: 'underline'
    },
    underlineContainer: {
        width: "30%",
        alignItems: "center",
        transition: "0.3"
    },
    input: {
        width: "75%",
        marginTop: "5%"
    },
    inputName: {
        fontWeight: "600",
        color: "#919191",
        marginTop: "10%"
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
});

export default LoginScreen;