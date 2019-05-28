import React from 'react'
import {View, TextInput, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import {ifIphoneX} from 'react-native-iphone-x-helper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {w, BLUE} from '../../../constants';

const SearchBar = (
    {
        title,
        iconRight,
        colorRight,
        onPressRight,
        onChangeText,
        placeholder,
        value,
        onBlur
    }
) => {
    const {container, sub, iconRightStyle, inputStyle, searchStyle} = styles;
    return (
        <SafeAreaView>
            <View style={container}>
                <View style={sub}>
                    <TextInput
                        style={inputStyle}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        value={value}
                        onBlur={onBlur}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={onPressRight}>
                        <View style={searchStyle}>
                            <MaterialCommunityIcons
                                name={iconRight}
                                style={[iconRightStyle, {color: colorRight}]}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export {SearchBar}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
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
    sub: {
        justifyContent: 'space-between',
        marginTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
        width: w - 35,
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 20
    },
    inputStyle: {
        fontSize: 18,
        width: w-90,
        marginLeft: 15,
        backgroundColor: '#fff',
        color: '#000'
    },
    searchStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    iconRightStyle: {
        fontSize: 30,
        marginTop: 2
    }

});