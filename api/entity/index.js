console.log('loading entities ....');

const [dbConfig, sq] = [require('../config/db.config'), require('sequelize')];
const sequelize = new sq(`postgres://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}:5432/${dbConfig.DB}`);
module.exports = {
  Sequelize: sq,
  sequelize,
  section: require('./section.entity')(sequelize, sq)
}

console.log('entities loaded');