import React, {Component} from 'react';
import {View} from 'react-native';

import {Header, ImageCard, Layout} from '../components/ui';
import {url3} from '../../constants';
import {SPIDER_DETAILS} from "../routes";


export default class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Spider man',
            data: []
        }
    }

    componentDidMount = async () => {
        try {
            const response = await fetch(url3);
            const data = await response.json();
            this.setState({data});
        } catch (e) {
            throw e
        }
    };

    render() {
        const {title, data} = this.state;
        const { navigation } = this.props;
        return (
            <View>
                <Header
                    title={title}
                    leftIcon="ios-menu"
                    leftColor="#fff"
                    onPress={() => navigation.openDrawer()}
                />
                <Layout>
                    {
                        data.map(item => (
                            <ImageCard
                                key={item.show.id}
                                data={item.show}
                                onPress={() => navigation.navigate(SPIDER_DETAILS, (item.show))}
                            />
                        ))
                    }
                </Layout>
            </View>
        );
    }
}

