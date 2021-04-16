const express = require('express');
const bodyParser = require('body-parser');
const nocache = require('nocache');
const Store = require('./store');
const notifications = require('./notifications');

module.exports = settings => {
  const store = new Store(settings);
  const app = express(settings);

  app.use(nocache());

  app.get('/requests', (req, res) => res.json(store.items));
  app.get('/flush', (req, res) => {
    store.flush();
    res.json({});
  });

  app.use('/notifications', notifications(settings));

  app.use(bodyParser.json(), (req, res, next) => {
    store.push({ path: req.path, method: req.method, body: req.body });
    res.json({});
  });

  return app;
};
