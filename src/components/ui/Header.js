import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import {ifIphoneX} from 'react-native-iphone-x-helper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {w} from '../../../constants';

const Header = ({title, detail, onPress, leftIcon, leftColor}) => {
    const {viewStyle, textStyle, leftButtonStyle} = styles;
    return (
        <SafeAreaView>
            <View style={viewStyle}>
                <TouchableOpacity onPress={onPress}>
                    <Ionicons
                        name={leftIcon}
                        style={[leftButtonStyle, { paddingLeft: detail ? 10 : 25 }]}
                        color={leftColor}
                    />
                </TouchableOpacity>
                <Text numberOfLines={1} ellipsizeMode='tail' style={[textStyle, {paddingLeft: leftIcon ? 10 : 0}]}>{title}</Text>
            </View>
        </SafeAreaView>
    )
};

export {Header}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: '#30d0fe',
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
        width: w - 60,
        fontFamily: 'AvenirNext-DemiBold',
        textTransform: 'uppercase',
        ...ifIphoneX({
            paddingTop: 75
        }, {
            paddingTop: 50
        })
    },
    leftButtonStyle: {
        ...ifIphoneX({
            paddingTop: 77
        }, {
            paddingTop: 52
        }),
        fontSize: 35,
    }

});