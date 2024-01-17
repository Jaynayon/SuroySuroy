import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef, Children, cloneElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome as HomeIcon } from '@fortawesome/free-solid-svg-icons/faHome' //free-brands-svg-icons | free-regular-svg-icons
import { faHeart as HeartIcon } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faPlus as PlusIcon } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faBus as LaagIcon } from '@fortawesome/free-solid-svg-icons/faBus'
import { faUser as UserIcon } from '@fortawesome/free-solid-svg-icons/faUser'

function TabsComponent(props) {
    const [iconsState, setIconsState] = useState({
        home: true,
        heart: false,
        laag: false,
        user: false,
        plus: false
    });

    const handleIconClick = (icon) => {
        setIconsState((prevIconsState) => ({
            ...prevIconsState,
            home: icon === 'home',
            heart: icon === 'heart',
            laag: icon === 'laag',
            user: icon === 'user',
            plus: icon === 'plus'
        }));
    };

    function Tabs({ icon, isClicked, object }) {
        return (
            object === 'plus' ?
                <TouchableWithoutFeedback onPress={() => handleIconClick(object)}>
                    <View style={styles.notClicked}>
                        <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                            <Image
                                source={require('../../assets/Marker-plus-icon-orange.png')}
                                style={{ width: 57, height: 69.45 }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                :
                <TouchableOpacity onPress={() => handleIconClick(object)}>
                    <View style={isClicked ? styles.isClicked : styles.notClicked}>
                        <FontAwesomeIcon icon={icon} color={
                            isClicked ? "white" : "black"
                        } size={24} />
                    </View>
                </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Tabs icon={HomeIcon} isClicked={iconsState.home} object={'home'} />
                    <Tabs icon={HeartIcon} isClicked={iconsState.heart} object={'heart'} />
                    <Tabs icon={PlusIcon} isClicked={iconsState.plus} object={'plus'} />
                    <Tabs icon={LaagIcon} isClicked={iconsState.laag} object={'laag'} />
                    <Tabs icon={UserIcon} isClicked={iconsState.user} object={'user'} />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({ //justifyContent follows the flexDirection
    container: {                    //alignItems follows the opposite direction of main axis (so, X)
        flex: 1,
        flexDirection: "column", //Main axis is (Y)
        justifyContent: "flex-end",
        position: 'absolute',
        bottom: 0,
        width: '100%', //Take up the full width of the screen
    },
    container2: {
        backgroundColor: "#F8F8F8",
        height: 100,
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    container3: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 5,
        width: "100%"
    },
    container4: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    homeIndicator: {
        backgroundColor: "#000",
        height: 5,
        width: "35.75%",
        borderRadius: 100,
        marginBottom: 5
    },
    isClicked: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FA4A0C",
        borderRadius: 40
    },
    notClicked: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40
    }
})

export default TabsComponent;