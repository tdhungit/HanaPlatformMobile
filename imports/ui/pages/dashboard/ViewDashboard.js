import React from 'react';
import {
    Container, Content,
    Card, CardItem,
    Text
} from 'native-base';
import Meteor from 'react-native-meteor';

export default class ViewDashboard extends React.Component {
    static navigationOptions = {
        title: 'Dashboard',
    };

    render() {
        const user = Meteor.user();

        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>Welcome {user.username}</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>HanaPlatform Dashboard</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}