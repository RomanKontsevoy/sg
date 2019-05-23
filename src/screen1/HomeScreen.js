import React, {Component} from 'react';
import {View} from 'react-native';

import {Header, ImageCard, Layout} from '../components/ui';
import {url2} from '../../constants';
import {STARGATE_DETAILS} from "../routes";


export default class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            title: 'star gate',
            data: []
        }
    }

    componentDidMount = async () => {
        try {
            const response = await fetch(url2);
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
                <Header title={title}/>
                <Layout>
                    {
                        data.map(item => (
                            <ImageCard
                                key={item.show.id}
                                data={item.show}
                                onPress={() => navigation.navigate(STARGATE_DETAILS, (item.show))}
                            />
                        ))
                    }
                </Layout>
            </View>
        );
    }
}

