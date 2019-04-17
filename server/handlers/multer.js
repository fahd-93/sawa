const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        console.log('req form filename', file);
        req["imageFileName"] =
        file.fieldname + Date.now() + file.originalname.match(/\.\w+$/);
        cb(null, req.imageFileName);
        console.log('req.imageFileName', req.imageFileName);

    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});

function checkFileType(file, cb) {

    //Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true)
    } else {
        cb('Error: images only')
    }
}


module.exports = { storage, upload };