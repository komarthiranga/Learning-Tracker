const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TopicModel = new Schema({
   name: {
       type: String,
       required: true
   },
   technology: {
       type: String, 
       required: true
   },
   description: {
       type: String,
       required: true
   }
});

module.exports = mongoose.model('Topics', TopicModel);