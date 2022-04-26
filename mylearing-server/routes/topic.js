const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topic');

router.post('/save',topicController.saveTopic);
router.get('/:technology/getTopics',topicController.getTopicsByTechnology)
module.exports = router;