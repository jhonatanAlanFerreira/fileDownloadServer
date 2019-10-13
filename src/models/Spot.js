let mongoose = require('mongoose');

let SpotSchema = new mongoose.Schema({
   thumbnail: String,
   company: String,
   price: Number,
   techs: [String],
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   }
});

module.exports = mongoose.model('Spot', SpotSchema);
