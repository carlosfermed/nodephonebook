
function deleteContact(contacts, id) {
    filteredContacts = contacts.filter(contacto => contacto.id !== parseInt(id));
    console.log(">>> contact deleted <<<");
    return filteredContacts;
}

module.exports = deleteContact;