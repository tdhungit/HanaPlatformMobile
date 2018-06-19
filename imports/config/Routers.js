import React from 'react';
import {createStackNavigator} from 'react-navigation';
import ViewHomePage from '../ui/pages/index/ViewHomePage';
import ViewLogin from '../ui/pages/index/ViewLogin';

export const Routers = createStackNavigator(
    {
        HomePage: ViewHomePage,
        Login: ViewLogin
    },
    {
        initialRouteName: 'HomePage',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);