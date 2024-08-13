import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId === null) return;

    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error("Failed to fetch contact:", error);
      }
    }

    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <div>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Address: {contact.address?.street}, {contact.address?.city}, {contact.address?.zipcode}</p>
          <p>Company: {contact.company?.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}