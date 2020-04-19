const [express, bodyParser, cors, corsConfiguration, port] = [
    require('express'),
    require('body-parser'),
    require('cors'), {
      origin: "http://localhost:7080"
    },
    process.env.PORT || 8080
];
const main = express();

main.use(cors(corsConfiguration));
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: true }));

const db = require('./entity');
db.sequelize.sync();

require('./routes/page.route')(main);

main.listen(port, () => console.log(`Server is running on port ${port}.`));