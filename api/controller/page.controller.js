const db = require("../entity");
const section = db.section;
const op = db.Sequelize.Op;

exports.findAll = async (request, response) => {
  const title = request.query.title;
  try {
    const data = await section.findAll();
    response.send(data);
  } catch (e) {
    response.status(500).send({
      message: e.message
    })
  }


}