module.exports = app => {
  const pageController = require('../controller/page.controller');
  const mailController = require('../controller/mail.controller');

  const router = require('express').Router();
  router.get('/page/all', pageController.findAll);
  router.get('/mail', mailController.sendMail);

  app.use('/api', router);
}