let express = require('express');
let app = express();
let router = require('./router');
let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jhon:140823allan@newocrapp-pbutv.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000);
