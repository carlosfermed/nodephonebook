
function getContactForm() {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Adding a contact</title>
        </head>
        <body>
            <h1>Add Contact info</h1>   
            <form action="/save" method="post" enctype="multipart/form-data">
                <label for="name">Name</label><input type="text" name="name" id="name"/><br><br>
                <label for="phone">Phone</label><input type="text" name="phone" id="phone"/><br><br>
                <label for="image">Image</label><input type="file" name="image" id="image"/><br><br>
                <input type="submit" name="submit" value="Add Contact"/>
            </form>
        </body>
        </html>`
}

module.exports = getContactForm;