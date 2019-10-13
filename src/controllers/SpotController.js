module.exports = {
    async store(req, res) {
         let file = req.file.buffer;

         var fileContents = Buffer.from(file, "base64");

         res.writeHead(200, {
            'Content-Type': 'application/jpeg',
            'Content-Disposition': 'attachment; filename=image.pdf',
            'Content-Length': fileContents.length
          });

        res.end(fileContents);
    }
};
