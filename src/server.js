let express = require('express');
let app = express();
let router = require('./router');
let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jhon:140823allan@newocrapp-pbutv.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "locahost"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  });

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000);
