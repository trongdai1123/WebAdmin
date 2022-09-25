
const productModel = require('./product_model');
const get = async(page,size)=>{

  //const items = products.slice((page - 1)*size, page*size);
  const items = await productModel.find({})
  .skip((page-1)*size)
  .limit(size);
    return items;
}

const getById = async(id) => {
    //const product = products.find(product => product._id == id)
   // return product;
   return await productModel.findById(id).populate('category');
}

const insert = async(product) => {
//const p = {
 // _id: products.length + 1,
 // name:product.name,
 // price:product.price,
 // quantity:product.quantity,
  //image:product.image,
//category:product.category,
//}

    //products.push(p);
    const p = new productModel(product);
    await p.save();
}

const update = async(id,product) => {
    const p = products.find(p => p._id.toString() == id.toString());
   // p.name = product.name;
   // p.price = product.price;
   // p.quantity = product.quantity;
   // p.image = product.image ? product.image : p.image;
   // p.category = product.category;

    if(!product.image){
delete product.image;
    }

    await productModel.findByIdAndUpdate(id, product);
    
}

const remove = async(id) => {
    //products = products.filter(p => p._id.toString() != id.toString());
    await productModel.findByIdAndDelete(id)
    .populate('category');
}

module.exports = {get, getById, insert, update, remove};

var products = [{
    "_id": 1,
    "name": "Tempsoft",
    "price": 2,
    "quantity": 61,
    "category": 19,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 2,
    "name": "Job",
    "price": 57,
    "quantity": 82,
    "category": 3,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 3,
    "name": "Vagram",
    "price": 96,
    "quantity": 93,
    "category": 12,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 4,
    "name": "Latlux",
    "price": 7,
    "quantity": 63,
    "category": 8,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 5,
    "name": "Wrapsafe",
    "price": 50,
    "quantity": 61,
    "category": 6,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 6,
    "name": "Lotstring",
    "price": 72,
    "quantity": 100,
    "category": 3,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 7,
    "name": "Konklab",
    "price": 58,
    "quantity": 100,
    "category": 7,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 8,
    "name": "Stronghold",
    "price": 21,
    "quantity": 24,
    "category": 4,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 9,
    "name": "Flowdesk",
    "price": 57,
    "quantity": 79,
    "category": 17,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 10,
    "name": "Vagram",
    "price": 65,
    "quantity": 39,
    "category": 6,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 11,
    "name": "Tampflex",
    "price": 13,
    "quantity": 3,
    "category": 15,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 12,
    "name": "Otcom",
    "price": 62,
    "quantity": 9,
    "category": 17,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 13,
    "name": "Tresom",
    "price": 50,
    "quantity": 50,
    "category": 17,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 14,
    "name": "Zaam-Dox",
    "price": 65,
    "quantity": 97,
    "category": 12,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 15,
    "name": "Quo Lux",
"price": 100,
    "quantity": 69,
    "category": 20,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 16,
    "name": "Konklab",
    "price": 69,
    "quantity": 10,
    "category": 5,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 17,
    "name": "Zaam-Dox",
    "price": 16,
    "quantity": 8,
    "category": 5,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 18,
    "name": "Toughjoyfax",
    "price": 93,
    "quantity": 39,
    "category": 20,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 19,
    "name": "Voltsillam",
    "price": 32,
    "quantity": 46,
    "category": 18,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
  }, {
    "_id": 20,
    "name": "Domainer",
    "price": 98,
    "quantity": 71,
    "category": 16,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iphone-13-pro-max-(8).jpg"
}];