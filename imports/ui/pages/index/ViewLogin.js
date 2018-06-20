import React from 'react';
import {
    Container, Content,
    Text,
    Form, Item as FormItem,
    Input,
    Label,
    Button,
    Toast
} from 'native-base';
import Meteor from 'react-native-meteor';

export default class ViewLogin extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    onLogin() {
        Meteor.loginWithPassword(this.state.username, this.state.password, (error) => {
            if (error) {
                Toast.show({
                    text: 'Login Error!',
                    buttonText: 'Ok'
                });
            } else {
                Toast.show({
                    text: 'Login Success!',
                    buttonText: 'Ok'
                });

                this.props.navigation.navigate('Dashboard');
            }
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <FormItem floatingLabel>
                            <Label>Username</Label>
                            <Input value={this.state.username}
                                   onChangeText={(text) => this.setState({username: text})}/>
                        </FormItem>
                        <FormItem floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true}
                                   value={this.state.password}
                                   onChangeText={(text) => this.setState({password: text})}/>
                        </FormItem>

                        <Button full primary
                                style={{marginTop: 10, marginBottom: 4}}
                                onPress={() => this.onLogin()}>
                            <Text> Login </Text>
                        </Button>
                        <Button full light primary>
                            <Text> Sign Up </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}