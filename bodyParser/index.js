const bodyParse = require('body-parser');

const bodyParser = (app) => {
    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({ extended: false }))
}

module.exports = bodyParser;