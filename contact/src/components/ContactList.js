import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function ContactList(props) {
    const { contacts, removeContact } = props;

    if (!contacts || contacts.length === 0) {
        return <div>No contacts available</div>;
    }

    const contactList = contacts.map((val) => (
        <div key={val.id}>
            <div>Name: {val.name}</div>
            <div>Email: {val.email}</div>
            <span onClick={() => removeContact(val.id)}><DeleteIcon /></span>
        </div>
    ));

    return (
        <div>
            <div>Contact List</div>
            <div>{contactList}</div>
        </div>
    );
}

export default ContactList;
