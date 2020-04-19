module.exports = app => {
  const controller = require('../controller/page.controller');
  const router = require('express').Router();
  router.get('/all', controller.findAll);
  app.use('/api/page', router);
}