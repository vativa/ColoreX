import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ColorList from './src/components/ColorList';
import ColorInfo from './src/components/ColorInfo';
import ApiColors from './src/components/ApiColors';
import WebColors from './src/components/WebColors';

export default createStackNavigator(
    {
        Home: ColorList,
        Details: ColorInfo,
        ApiColors: ApiColors,
        WebColors: WebColors,
    },
    {
        initialRouteName: 'Home'
    }
);
