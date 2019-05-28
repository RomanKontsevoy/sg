import React from 'react'
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {w} from '../../../constants'


const ImageBigCard = ({data}) => {
    const {container, sub, cover} = styles;
    const {image} = data;
    const img = image === null ? 'https://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : `https${image.medium.slice(4)}`;
    return (
        <View style={container}>
            <View style={sub}>
                <Image
                    style={cover}
                    source={{uri: img}}
                />
            </View>
        </View>
    )
};

export {ImageBigCard}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: .9,
        backgroundColor: 'white',
        borderRadius: 10
    },
    cover: {
        width: w / 1.67,
        height: w * 0.9,
        alignSelf: 'center',
        borderRadius: 10
    }
});