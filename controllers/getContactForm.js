
function getContactForm() {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Adding a contact</title>
            <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
            <h1>Add Contact</h1>   
            <form action="/save" method="post" enctype="multipart/form-data">
              <fieldset>
                <legend>Contact information</legend>
                <label for="name">Name:</label><input type="text" name="name" id="name"/><br><br>
                <label for="phone">Phone:</label><input type="text" name="phone" id="phone"/><br><br>
                <label for="image">Select an image:</label><input type="file" name="image" id="image"/><br><br>
                <input id="addButton" type="submit" name="submit" value="Add Contact"/>
              </fieldset>
            </form>
        </body>
        </html>`
}

module.exports = getContactForm;