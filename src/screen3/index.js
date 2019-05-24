import {createStackNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import StargateHomeScreen from '../screen1/HomeScreen'
import DetailsScreen from "./DetailsScreen";
import {
    SPIDER_HOME,
    SPIDER_DETAILS,
    STARGATE_HOME
} from "../routes";

export default createStackNavigator(
    {
        [SPIDER_HOME]: HomeScreen,
        [STARGATE_HOME]: StargateHomeScreen,
        [SPIDER_DETAILS]: DetailsScreen
    },
    {
        headerMode: 'none'
    }
)