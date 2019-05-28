import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {searchChanged, getMovies} from "../actions";
import {Header, ImageCard, SearchBar, Layout} from '../components/ui';
import {STARGATE_DETAILS} from "../routes";


class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            title: 'star gate',
            visibleSearchbar: false,
        };
        this.onBlurInput = this.onBlurInput.bind(this);
    }


    onChangeText = text => {
        this.props.searchChanged(text);
        this.props.getMovies(text)
    };

    onBlurInput () {
        console.log('onBlur:');
        this.setState({visibleSearchbar: true})
    };

    componentDidMount() {
        this.props.getMovies(this.props.movie);
    }

    render() {
        const {title, visibleSearchbar} = this.state;
        const {navigation, movie, data} = this.props;
        return (
            <View>
                {visibleSearchbar ?
                    <SearchBar
                        colorRight={'#fff'}
                        iconRight='magnify'
                        placeholder="Поиск"
                        onChangeText={this.onChangeText}
                        value={movie}
                        onPressRight={() => this.setState({visibleSearchbar: false})}
                        onBlur={this.onBlurInput}
                    /> :
                    <Header
                        iconRight="magnify"
                        colorRight={"#fff"}
                        title={title}
                        onPressRight={() => this.setState({visibleSearchbar: true})}
                    />
                }
                <Layout>
                    {
                        data.map(item => (
                            <ImageCard
                                key={item.show.id}
                                data={item.show}
                                onPress={() => navigation.navigate(STARGATE_DETAILS, ({
                                    show: item.show,
                                    onGoBack: this.onGoBack
                                }))}
                            />
                        ))
                    }
                </Layout>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        movie: state.search.movie,
        data: state.search.data
    }
};

export default connect(mapStateToProps, {searchChanged, getMovies})(HomeScreen)