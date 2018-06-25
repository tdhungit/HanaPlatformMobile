import React from 'react';
import {Root} from 'native-base';
import Meteor from 'react-native-meteor';
import {appConfig} from './imports/config/config.inc';
import {AppDrawer} from './imports/config/Sidebar';
import Expo from 'expo';
import {Provider, connect} from 'react-redux'
import {store} from './imports/ui/store';
import {appSetVar} from './imports/ui/store/app/app.actions';

Meteor.connect(appConfig.socketServer);

class AppRootComponent extends React.Component {
    render() {
        return (
            <Root>
                <AppDrawer screenProps={this.props}/>
            </Root>
        );
    }
}

const mapStateToProps = (state) => {
    return {app: state.app}
};

const mapDispatchToProps = {
    appSetVar
};

const AppRoot = connect(mapStateToProps, mapDispatchToProps)(AppRootComponent);

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
            <Provider store={store}>
                <AppRoot/>
            </Provider>
        );
    }
}
