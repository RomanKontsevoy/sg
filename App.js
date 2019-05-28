import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import HomeScreen from './src/screen1'

const store = createStore(reducers, applyMiddleware(ReduxThunk));

const App = () => {
    return (
        <Provider store={store}>
            <HomeScreen/>
        </Provider>
    )
};

export default App