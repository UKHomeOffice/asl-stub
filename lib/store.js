const moment = require('moment');
const { omit } = require('lodash');

class Store {
  constructor(options = {}) {
    this._items = [];
    this.lifetime = options.lifetime;

    if (this.lifetime) {
      const interval = options.interval || 1000;
      setInterval(() => this.expireItems(), interval);
    }
  }

  expireItems() {
    this._items = this._items.filter(item => {
      return moment().isBefore(item.expireAt);
    });
  }

  get items() {
    return this._items.map(item => omit(item, 'expireAt'));
  }

  flush() {
    this._items = [];
  }

  push(item) {
    const now = moment();
    item = {
      ...item,
      timestamp: now,
      expireAt: now.clone().add(this.lifetime)
    };
    this._items.push(item);
  }
}

module.exports = Store;
