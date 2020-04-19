module.exports = (sq, DataType) => sq.define('section',
  {
    content: {
      type: DataType.STRING,
      allowNull: false
    },
    pageref: {
      type: DataType.STRING,
      allowNull: false
    }
  }
);
