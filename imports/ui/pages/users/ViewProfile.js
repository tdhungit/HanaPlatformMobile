import React from 'react';
import {
    Container, Content,
    List,
} from 'native-base';
import Meteor, {withTracker} from 'react-native-meteor';
import {ListItemIcon} from '../../components/helpers/ListHelpers';
import {Companies} from '../../../common/collections';

class ViewProfile extends React.Component {
    componentWillMount() {
        const user = Meteor.user();
        if (!user || !user._id) {
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        const user = Meteor.user();
        const {company} = this.props;

        return (
            <Container>
                <Content>
                    <List>
                        <ListItemIcon
                            icon="user"
                            text={user.username}/>
                        <ListItemIcon
                            icon="envelope-open-o"
                            text={user.emails && user.emails[0] && user.emails[0].address || 'N/A'}/>
                        <ListItemIcon
                            icon="vcard"
                            text={user.profile && user.profile.firstName || 'N/A'}/>
                        <ListItemIcon
                            icon="vcard"
                            text={user.profile && user.profile.lastName || 'N/A'}/>
                        <ListItemIcon
                            icon="university"
                            text={company && company.name || 'N/A'}/>
                        <ListItemIcon
                            icon="at"
                            text={'http://' + (company && company.domain || '')}/>
                    </List>
                </Content>
            </Container>
        );
    }
}

const component = withTracker((params) => {
    Meteor.subscribe('companies.detail', Meteor.user().companyId);

    return {
        company: Companies.findOne(Meteor.user().companyId)
    };
})(ViewProfile);

component.navigationOptions = {
    title: 'Profile'
};

export default component;