let Request = require('../Request');

module.exports = class Estimate_Messages {

    constructor(options) {
        this.name = 'messages';
        this.baseUri = 'https://api.harvestapp.com/v2/estimates/';
        this.options = options;
    }

    list(estimate_id, cb) {
        this.options.url = this.baseUri + estimate_id + '/' + this.name;

        new Request(this.options, cb);
    }

    create(estimate_id, params, cb) {
        this.options.url = this.baseUri + estimate_id + '/' + this.name;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(estimate_id, message_id, cb) {
        this.options.url = this.baseUri + estimate_id + '/' + this.name + '/' + message_id;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }

    mark(estimate_id, params, cb) {
        this.options.url = this.baseUri + estimate_id + '/' + this.name;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }
}