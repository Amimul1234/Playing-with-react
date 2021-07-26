import React from 'react';

import classes from './MeetUpList.module.css'
import MeetUpItem from "./MeetUpItem";

const MeetUpLists = (props) => {
    return <ul className={classes.list}>
        {props.meetups.map(meetup =>
            <MeetUpItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                description={meetup.description}
            />)}
    </ul>
}

export default MeetUpLists;