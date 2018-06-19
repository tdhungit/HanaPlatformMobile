import React, {Component} from 'react';
import {
    Container, Content,
    Text,
    Form, Item as FormItem,
    Input,
    Label,
    Button,
} from 'native-base';

export default class ViewLogin extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <FormItem floatingLabel>
                            <Label>Email</Label>
                            <Input/>
                        </FormItem>
                        <FormItem floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true}/>
                        </FormItem>

                        <Button full primary style={{marginTop: 10, marginBottom: 4}}>
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