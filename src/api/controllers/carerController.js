const db = require ('../models')

// Create the main model
const Product = db.products

const Review = db.reviews

// Main work

// 1. Create number

const createNumber = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }
    const number = await Number.create(info)
    res.status(200).send(product)
    console.log(product)
}

// 2. check number





module.exports = {
    createNumber
    // checkNumber

}