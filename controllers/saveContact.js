const formidable = require("formidable").IncomingForm;
const path = require("node:path");


function saveContact(req, res, contacts, redirect) {

  const form = new formidable({                                       // "Formidable" handles the "data" and "end" events.
    uploadDir: `${path.dirname(process.argv[1])}\\public\\img`,       // Directory for saving images.
    allowEmptyFiles: true,                                            // Makes uploading an image optional.
    minFileSize: 0                                                    // Since it is not mandatory to upload images, it is necessary to write 0 in this property.
  });
  try {
    form.parse(req, (err, contact, files) => {
      if (err) {
        console.log('err :>> ', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno del servidor');
        return;
      }
      if (checkName(contact.name[0], contacts)) {
        const contactToAdd = {
          id: addId(contacts),
          name: contact.name[0],
          phone: contact.phone[0],
          image: Boolean(Object.values(files)[0][0].size) ? files.image[0].newFilename : "default_image"
        }
        console.log(">>>>>> contact created <<<<<<")
        contacts.push(contactToAdd);
        redirect(res);
      }
      else {
        res.writeHead(409, { 'Content-Type': 'text/plain' });
        res.end("The name is already in use");
        return
      }
    });
  }
  catch (err) {
    console.log('err :>> ', err);
    res.end();
    return;
  }
}

const addId = (contacts) => {
  let maxId = Math.max(...contacts.map(contact => contact.id))
  maxId += 1;
  return maxId;
}

const checkName = (contactName, contacts) => {
  return !contacts.find(contact => contact.name === contactName)
}

module.exports = saveContact;
