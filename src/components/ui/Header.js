import React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import {ifIphoneX} from 'react-native-iphone-x-helper'

const Header = ({title}) => {
    const {viewStyle, textStyle} = styles;
    return (
        <SafeAreaView>
            <View style={viewStyle}>
                <Text style={textStyle}>{title}</Text>
            </View>
        </SafeAreaView>
    )
};

export {Header}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#30d0fe',
        ...ifIphoneX({
            height: 116
        }, {
            height: 90
        }),
        justifyContent: 'center',
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
        fontFamily: 'AvenirNext-DemiBold',
        textTransform: 'uppercase',
        ...ifIphoneX({
            paddingTop: 75
        }, {
            paddingTop: 50
        })
    },
});