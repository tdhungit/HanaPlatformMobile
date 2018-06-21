import React from 'react';
import {
    createStackNavigator,
    DrawerActions
} from 'react-navigation';
import {View} from 'react-native';
import {
    Button,
    Icon
} from 'native-base';
import ViewHomePage from '../ui/pages/index/ViewHomePage';
import ViewLogin from '../ui/pages/index/ViewLogin';
import ViewDashboard from '../ui/pages/dashboard/ViewDashboard';

class HeaderLeft extends React.Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Button transparent
                        title={'Sidebar'}
                        onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Icon ios='ios-menu'
                          android="md-menu"
                          style={{fontSize: 24, color: '#ffffff', marginTop: 0}}/>
                </Button>
            </View>
        );
    }
}

export const Routers = createStackNavigator(
    {
        HomePage: ViewHomePage,
        Login: ViewLogin,
        Dashboard: ViewDashboard
    },
    {
        initialRouteName: 'HomePage',
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerLeft: <HeaderLeft navigation={navigation}/>
        }),
    }
);