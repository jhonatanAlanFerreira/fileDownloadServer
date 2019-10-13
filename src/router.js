let express = require('express');
let SessionController = require('./controllers/SessionController');
let SpotsController = require('../src/controllers/SpotController');
let routes = express.Router();
let multer = require('multer');
let uploadConfig = require('./config/upload');

let upload = multer(uploadConfig);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "locahost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotsController.store);

routes.get('/', (req, res) => res.json({ res: 'Server Working!'}))

module.exports = routes;