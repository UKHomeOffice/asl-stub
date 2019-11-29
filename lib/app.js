const express = require('express');
const bodyParser = require('body-parser');
const Store = require('./store');

module.exports = settings => {
  const store = new Store(settings);
  const app = express(settings);

  app.get('/requests', (req, res) => res.json(store.items));
  app.get('/flush', (req, res) => {
    store.flush();
    res.json({});
  });

  app.use(bodyParser.json(), (req, res, next) => {
    store.push({ path: req.path, method: req.method, body: req.body });
    res.json({});
  });

  return app;
};
