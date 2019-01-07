const Client = require("mysql-pro");
const client = new Client({
    mysql: {
        host: 'www.tp5.com',
        user: 'root',
        password: 'root',
        database: 'backstage',
    }
});

module.exports = client;