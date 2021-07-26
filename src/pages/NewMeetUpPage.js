import React from 'react';

import {useHistory} from 'react-router-dom'

import NewMeetupForms from "../components/meetups/NewMeetupForms";


const NewMeetUpPage = () => {

    const history = useHistory();

    const url = 'https://react-getting-started-e1990-default-rtdb.firebaseio.com/meetups.json';

    function addMeetUpHandler(meetupData) {
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
            history.replace('/');
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForms onAddMeetup={addMeetUpHandler}/>
        </section>
    );

};

export default NewMeetUpPage;