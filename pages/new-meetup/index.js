import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'


function NewMeetupPage() {

    async function addMeetupHandler(enteredMeetupData) {
        fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
}

export default NewMeetupPage
