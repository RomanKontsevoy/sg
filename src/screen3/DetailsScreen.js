import React, {PureComponent} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, ImageBigCard} from '../components/ui';
import {STARGATE_HOME} from "../routes";


class DetailsScreen extends PureComponent {
    render() {
        const { image, name, summary } = this.props.navigation.state.params;
        const { navigation } = this.props;
        const data = {image, name};
        const { container, h1, h2, sub } = styles;
        return (
            <View style={container}>
                <Header
                    detail
                    title={name}
                    onPress={() => navigation.goBack()}
                    leftIcon='ios-arrow-back'
                    leftColor='#fff'
                />
                <ScrollView>
                    <View style={sub}>
                        <ImageBigCard
                            data={data}
                        />
                        <Button
                            onPress={() => navigation.navigate (STARGATE_HOME) }
                            title="HOME"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                        <Text style={h1}>{name.toUpperCase()}</Text>
                        <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#fff',

    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 30,
        padding: 15,
        textAlign: 'center',
    },
    h2: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 15,
        padding: 15,
        color: 'grey',
        paddingHorizontal: 15,
        textAlign: 'center',
    },
    sub: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 150,
        backgroundColor: '#fff'
    }
});

export default DetailsScreen;