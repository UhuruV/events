import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

function EventListItem() {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                    </Item>
                    <Item.Content>
                        <Item>
                            <Item.Header content='Event Title' />
                            <Item.Description>
                                Hosted By:
                            </Item.Description>
                        </Item>
                    </Item.Content>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />Date
                    <Icon name='marker'/>Venue
                </span>
            </Segment>

            <Segment secondary>
                <List horizontal>
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                </List>
            </Segment>

            <Segment clearing>
                <div>
                    Description of Event
                </div>
                <Button color='teal' floated='right' content='View'/>
            </Segment>
        </Segment.Group>
    )
}

export default EventListItem;