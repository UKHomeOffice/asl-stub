const express = require('express');
const Store = require('./store');

module.exports = settings => {
  const store = new Store(settings);
  const app = express(settings);

  app.get('/requests', (req, res) => res.json(store.items));

  app.use((req, res, next) => {
    store.push({ path: req.path, method: req.method, body: req.body });
    next();
  });

  return app;
};
