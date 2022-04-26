const Topics = require('../models/topic');
exports.saveTopic = (req, res) => {
    const TopicModel = new Topics(req.body);
    TopicModel.save().then( () => {
      console.log('created successfully');
      res.status(200).send({message: 'successfully created'});
    }).catch( error => console.log(error));
}

exports.getTopicsByTechnology = (req, res) => {
  Topics.find({technology: req.params.technology }).then( topics => {
    res.status(200).send(topics);
  }).catch( error => console.log(error) )

}