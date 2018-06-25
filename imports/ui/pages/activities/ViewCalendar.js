import React from 'react';
import Meteor, {withTracker} from 'react-native-meteor';
import {
    Container, Content,
} from 'native-base';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {Activities} from '../../../common/collections';

const _format = 'YYYY-MM-DD';
const _today = moment().format(_format);

class ViewCalendarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: _today
        };
    }

    onMonthChange(month) {
        const {screenProps} = this.props;
        this.setState({current: month.dateString});
        screenProps.appSetVar('calendarViewStart', moment(month.dateString).subtract(38, 'days').format(_format));
        screenProps.appSetVar('calendarViewEnd', moment(month.dateString).add(38, 'days').format(_format));
    }

    render() {
        const {activities} = this.props;

        console.log(activities);

        return (
            <Container>
                <Content>
                    <Calendar
                        current={this.state.current}
                        onMonthChange={(month) => this.onMonthChange(month)}/>
                </Content>
            </Container>
        );
    }
}

const ViewCalendar = withTracker((params) => {
    const start = moment().subtract(38, 'days').format(_format);
    const end = moment().add(38, 'days').format(_format);
    const startDate = params.screenProps.app.calendarViewStart || start;
    const endDate = params.screenProps.app.calendarViewEnd || end;

    Meteor.subscribe('users.user');
    Meteor.subscribe('activities.events', startDate, endDate);

    const events = Activities.find();
    return {
        activities: events
    };
})(ViewCalendarComponent);

ViewCalendar.navigationOptions = {
    title: 'Calendar'
};

export default ViewCalendar;