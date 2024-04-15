const formidable = require("formidable");
const path = require("node:path");

// Comenzamos con el valor 4 ya que hemos introducido 3 contactos por defecto.
let idCount = 4;

function saveContact(req, res, contacts, redirect) {

  console.log('os.homedir :>> ', path.dirname(process.argv[1]));
  const form = new formidable.IncomingForm({                          // 'formidable' ya maneja los eventos "data" y "end".
    uploadDir: `${path.dirname(process.argv[1])}\\public\\img`,       // Directorio de guardado de las imagenes.
    allowEmptyFiles: true,                                            // Permite que no sea necesario subir una imagen.
    minFileSize: 0                                                    // Al no ser obligatorio subir imagenes es necesario anotar 0 en esta propiedad.
  });
  try {
    form.parse(req, (err, contacto, files) => {
      if (err) {
        console.log('err :>> ', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno del servidor');
        return;
      }
      if (Object.keys(files).length > 0) {
        const contactToAdd = {
          id: idCount++,
          name: contacto.name[0],
          phone: contacto.phone[0],
          image: files.image[0].newFilename
        }
        console.log("____________________")
        console.log('contactToAdd con foto :>> ', contactToAdd);
        contacts.push(contactToAdd);
        redirect(res);
      }
      else {
        const contactToAdd = {
          id: idCount++,
          name: contacto.name[0],
          phone: contacto.phone[0],
          image: "defaultImage",
        }
        contacts.push(contactToAdd);
        redirect(res);
      }
    });
  }
  catch (err) {
    console.log('err :>> ', err);
    res.end()
    return;
  }
}

module.exports = saveContact;
