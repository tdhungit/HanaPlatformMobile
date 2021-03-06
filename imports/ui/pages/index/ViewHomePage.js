import React from 'react';
import {
    Container, Content,
    Button,
    Text,
    Card, CardItem,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class ViewHomePage extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>Welcome to UP5</Text>
                        </CardItem>
                    </Card>

                    <Button block
                            title={'Login'}
                            onPress={() => this.props.navigation.navigate('Login')}>
                        <Ionicons name="md-checkmark-circle" size={32} color="green"/>
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}