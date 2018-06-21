import React from 'react';
import {
    ListItem,
    Icon,
    Left, Body,
    Text,
} from 'native-base';

export class ListItemIcon extends React.Component {
    render() {
        const {icon, iconType, text, style} = this.props;

        let styles = {fontSize: 22};
        if (style) {
            styles = Object.assign(styles, style);
        }

        return (
            <ListItem icon>
                <Left>
                    <Icon type={iconType || 'FontAwesome'}
                          name={icon}
                          style={styles}/>
                </Left>
                <Body>
                    <Text>{text}</Text>
                </Body>
            </ListItem>
        );
    }
}