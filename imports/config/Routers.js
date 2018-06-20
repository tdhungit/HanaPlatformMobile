import React from 'react';
import {createStackNavigator} from 'react-navigation';
import ViewHomePage from '../ui/pages/index/ViewHomePage';
import ViewLogin from '../ui/pages/index/ViewLogin';
import ViewDashboard from '../ui/pages/dashboard/ViewDashboard';

export const Routers = createStackNavigator(
    {
        HomePage: ViewHomePage,
        Login: ViewLogin,
        Dashboard: ViewDashboard
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