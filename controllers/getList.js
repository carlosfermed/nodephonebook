// const contacts = require("./contacts");

function getList(data) {

    sortContacts(data);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css" />
        <title>PhoneBook</title>
    </head>
    <body>
        <h1>The Minimalist PhoneBook</h1> 
        <table>
        <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>Delete</th>            
        </tr>
        ${data.map(createContactItem).join('')}
        <tr><td><a href="/new" id="addButton">add</a></td></tr>
    </table>
       
    </body>
    </html>`;
}

function sortContacts(contacts) {
    contacts.sort( (a, b) => (a.name).localeCompare(b.name));
}

function createContactItem(contact) {
    return `<tr><td>${contact.id}</td><td>${contact.name}</td><td>${contact.phone}</td><td><a href=/delete/${contact.id}>delete</a></tr>`;
}

module.exports = getList;