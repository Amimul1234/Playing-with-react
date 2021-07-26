import React, {useEffect, useState} from 'react';
import MeetUpLists from "../components/meetups/MeetUpLists";

const AllMeetUps = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    const url = 'https://react-getting-started-e1990-default-rtdb.firebaseio.com/meetups.json';


    useEffect(() => {
        setIsLoading(true);

        fetch(url).then(response => {
            return response.json();
        }).then((data) => {

            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });

    }, []);

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetUpLists meetups={loadedMeetups}/>
        </section>
    );
};

export default AllMeetUps;