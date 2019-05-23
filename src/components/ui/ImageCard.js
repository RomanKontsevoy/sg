import React from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'
import {w} from '../../../constants'


const ImageCard = ({data}) => {
    const {container, sub, h1, cover} = styles;
    const {image, name} = data;
    return (
        <View style={container}>
            <View style={sub}>
                <Image
                    style={cover}
                    source={{uri: image}}
                />
            </View>
            <Text style={h1}>{name.toUpperCase()}</Text>
        </View>
    )
};

export {ImageCard}

const styles = StyleSheet.create({
    container: {
        width: w/2.4,
        paddingVertical: 10
    },
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height:5},
        shadowOpacity: .4,
        backgroundColor: 'white',
        borderRadius: 10
    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4,
        paddingTop: 10
    },
    cover: {
        width: w / 2.4,
        height: w * 0.63,
        alignSelf: 'center',
        borderRadius: 10
    }
});