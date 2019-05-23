import React, {Component} from 'react';
import {View} from 'react-native';

import {Header, ImageCard, Layout} from '../components/ui';
import {url} from '../../constants';


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
            const response = await fetch(url);
            const data = await response.json();
            this.setState({data});
        } catch (e) {
            throw e
        }
    };

    render() {
        const {title, data} = this.state;
        return (
            <View>
                <Header title={title}/>
                <Layout>
                    {
                        data.map(item => (
                            <ImageCard
                                key={item.id}
                                data={item}
                            />
                        ))
                    }
                </Layout>
            </View>
        );
    }
}