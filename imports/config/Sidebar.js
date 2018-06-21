import React from 'react';
import {
    StyleSheet,
    ScrollView,
} from 'react-native';
import {
    createDrawerNavigator,
    SafeAreaView,
} from 'react-navigation';
import {
    List, ListItem,
    Text,
    Left,
    Body,
    Icon
} from 'native-base';
import {Routers} from './Routers';

const sidebars = [
    {
        routeName: 'HomePage',
        label: 'Home',
        icon: 'home',
    },
    {
        routeName: 'Dashboard',
        label: 'Dashboard',
        icon: 'home',
    },
    {
        routeName: 'Login',
        label: 'Login',
        icon: 'home',
    },
];

class Sidebar extends React.Component {
    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}
                              forceInset={{top: 'always', horizontal: 'never'}}>
                    <List>
                        {sidebars.map((route, i) => {
                            return (
                                <ListItem key={i}
                                          icon
                                          onPress={() => this.props.navigation.navigate(route.routeName)}>
                                    <Left>
                                        <Icon name={route.icon} style={{fontSize: 20, color: '#000000'}}/>
                                    </Left>
                                    <Body>
                                        <Text style={{color: '#000000'}}>{route.label}</Text>
                                    </Body>
                                </ListItem>
                            );
                        })}
                    </List>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export const AppDrawer = createDrawerNavigator(
    {
        Home: {
            screen: Routers,
            navigationOptions: {
                drawerLabel: 'Home'
            }
        }
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#ffffff',
        contentComponent: Sidebar
    }
);