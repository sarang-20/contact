import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "contacts";

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem(localStorageKey);
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const id = uuid4();
    const contact = { id, ...newContact };
    setContacts([...contacts, contact]);
  };

  const removeContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} removeContact={removeContact} />
    </div>
  );
}

export default App;
