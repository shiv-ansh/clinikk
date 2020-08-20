const express = require("express");

const app = express();

const multer = require("multer");

const cors = require("cors");

const port = 5000;

app.use(cors());

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage }).single("file");

app.post("/upload", function (req, res) {

    upload(req, res, function (err) {

        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        }
        else if (err) {
            return res.status(500).json(err)
        }

        return res.status(200).send(req.file);
    });
});


//listening to server
app.listen(port, () => console.log(`Server is running at port ${port}`));
