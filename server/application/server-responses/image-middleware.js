const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {                           // DESTINO A DONDE SE VA A ENVIAR
        console.log('destination Rdy', file);
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        const name = getRandomImageName(file);
        cb(null, name) //modiofica el nombre
    } 
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        console.log('mimetype Rdy: ',file);
        cb(null, true)
    } else {
        cb(null, false)
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter : fileFilter
});

function getRandomImageName(file) {
    var filename = "";
    switch (file.mimetype) {
        case "image/png": 
            filename = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)+".png";
            break
        case "image/jpg":
            filename = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)+".jpg";
            break
        case "image/jpeg":
            filename = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)+".jpeg";
            break
        default: 
            filename = null;
            break
    }
    return filename
}

module.exports = upload;
