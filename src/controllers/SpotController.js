
module.exports = {
    async store(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

         let file = req.file.buffer;

         var fileContents = Buffer.from(file);

         res.writeHead(200, {
            'Content-Disposition': 'attachment;',
            'Content-Type': 'exemploTest',
            'Content-Length': fileContents.length
          });


        res.end(fileContents, 'binary');
    }
};
