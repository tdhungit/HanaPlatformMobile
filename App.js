import React from 'react';
import {Root} from 'native-base';
import Meteor from 'react-native-meteor';
import {appConfig} from './imports/config/config.inc';
import {AppDrawer} from './imports/config/Sidebar';
import Expo from 'expo';

Meteor.connect(appConfig.socketServer);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            FontAwesome: require('native-base/Fonts/FontAwesome.ttf'),
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });

        this.setState({loading: false});
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading/>;
        }

        return (
            <Root>
                <AppDrawer/>
            </Root>
        );
    }
}