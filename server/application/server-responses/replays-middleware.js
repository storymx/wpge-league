const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {                           // DESTINO A DONDE SE VA A ENVIAR
        cb(null, './replays')
    },
    filename: (req, file, cb) => {
        //Nuevo Nombre random string
        const name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)+'.rep'
        cb(null, name) //modiofica el nombre
    }
})

const fileFilter = (req, file, cb) => {
    console.log(file.mimetype)
    if(file.mimetype === 'application/octet-stream') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter : fileFilter
})

module.exports = upload