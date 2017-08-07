const Item = require('../models/item');

addItem = (req, res) => {
  var newItem = new Item({
    name: req.body.name,
    price: req.body.price,
    brand: req.body.brand
  })
  newItem.save((err, item) => {
    if(err)res.send(err);
    res.send(item);
  })
}

getItems = (req, res) => {
  currentPage = parseInt(req.query.page) || 1
  resultPerPage = parseInt(req.query.result) || 30
  Item.find({}, null, {
    limit: resultPerPage,
    skip: resultPerPage * (currentPage - 1)
  }).then((items)=>{
    res.send({
      items: items,
      paginationInfo: {
        totalResults: items.length,
        resultPerPage: resultPerPage,
        currentPage: currentPage,
        pages: Math.ceil(items.length/resultPerPage)
      }
    })
  })
}

deleteItem = (req, res) => {
  Item.remove({_id: req.params.id}, (err, response) => {
    if(err)res.send(err)
    res.send(response)
  })
}

updateItem = (req, res) => {
  Item.findById(req.params.id).then((item)=>{
    item.name = req.body.name || item.name
    item.price = req.body.price || item.price
    item.brand = req.body.brand || item.brand
    item.save((err, item) => {
      if(err)res.send(err)
      res.send(item)
    })
  })
}

module.exports = {
  addItem,
  getItems,
  deleteItem,
  updateItem
};