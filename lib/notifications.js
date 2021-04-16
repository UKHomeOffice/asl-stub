const { Router } = require('express');
const db = require('@asl/schema')

module.exports = settings => {
  const models = db(settings.db);
  const app = Router({ mergeParams: true });

  app.get('/', (req, res, next) => {
    const { field, value } = req.query;
    const { Notification } = models;

    Promise.resolve()
      .then(() => {
        let query = Notification.query();

        if (Array.isArray(value)) {
          query = query.whereIn(field, value)
        } else {
          query = query.where(field, value)
        }
        return query;
      })
      .then(notifications => res.json(notifications))
      .catch(next);
  })

  return app;
}
