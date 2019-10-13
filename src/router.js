let express = require('express');
let SessionController = require('./controllers/SessionController');
let SpotsController = require('../src/controllers/SpotController');
let routes = express.Router();
let multer = require('multer');
let uploadConfig = require('./config/upload');

let upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotsController.store);

module.exports = routes;