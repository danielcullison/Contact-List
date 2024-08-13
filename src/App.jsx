import "./App.css";
import React, { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact"; // Ensure this import is correct

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}