const Sequelize = require('sequelize')
const db = require('./database')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  size: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
      max:10, min:5
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://media.gettyimages.com/photos/dec-1995-a-closeup-shot-of-air-jordans-as-they-appear-on-the-court-picture-id394305?s=2048x2048"
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "A pair of basketball legend Michael Jordan's famous Air Jordans from his rookie season are seen on April 28, 2021 in Geneva"
  },
  category: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['W','M']]
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,

  }

})
module.exports = Product;