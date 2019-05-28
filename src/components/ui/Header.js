import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import {ifIphoneX} from 'react-native-iphone-x-helper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {w, BLUE} from '../../../constants';

const Header = ({
                    title,
                    iconLeft,
                    iconRight,
                    colorLeft,
                    colorRight,
                    onPressLeft,
                    onPressRight
                }) => {
    const {container, textStyle, iconLeftStyle, iconRightStyle} = styles;
    return (
        <SafeAreaView>
            <View style={container}>
                {iconLeft &&
                <TouchableOpacity onPress={onPressLeft}>
                    <Ionicons
                        name={iconLeft}
                        color={colorLeft}
                        style={iconLeftStyle}
                    />
                </TouchableOpacity>
                }
                <Text numberOfLines={1} ellipsizeMode='tail'
                      style={textStyle}>{title}</Text>
                {iconRight &&
                <TouchableOpacity onPress={onPressRight}>
                    <MaterialCommunityIcons
                        name={iconRight}
                        style={[iconRightStyle, {color: colorRight}]}
                    />
                </TouchableOpacity>
                }
            </View>
        </SafeAreaView>
    )
};

export {Header}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: BLUE,
        paddingHorizontal: 20,
        ...ifIphoneX({
            height: 116
        }, {
            height: 90
        }),
        paddingLeft: 22,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        color: 'white',
        fontSize: 28,
        width: w - 75,
        fontFamily: 'AvenirNext-DemiBold',
        textTransform: 'uppercase',
        ...ifIphoneX({
            paddingTop: 75
        }, {
            paddingTop: 40
        })
    },
    iconLeftStyle: {
        ...ifIphoneX({
            paddingTop: 77
        }, {
            paddingTop: 42
        }),
        fontSize: 35,
    },
    iconRightStyle: {
        ...ifIphoneX({
            paddingTop: 77
        }, {
            paddingTop: 44
        }),
        fontSize: 30,
        marginRight: 3
    }

});