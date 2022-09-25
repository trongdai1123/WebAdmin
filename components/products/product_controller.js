

const productService = require('./product_service');
const categoryService = require('../categories/category_service');

const get = async (page, size) => {
    page = page || 1;
    size = size || 3;
    return await productService.get(page, size);
}

const getById = async(id) =>{

    const product = await productService.getById(id);
    let categories = await categoryService.get();
    categories = categories.map(category => {
        let c = {
            _id: category._id,
            name: category.name,
            description: category.description,
            isSelected: false
        }
          // category = {...category, isSelected : false};
           if(product.category.toString() == c._id.toString()){
            c.isSelected = true;
           }
        return c;
    })
    return {product, categories};
}

const insert = async(product) =>{
await productService.insert(product);
     
}

const update = async(id,product) =>{
    await productService.update(id,product);
     
}

const remove = async(id) =>{
    await productService.remove(id);
}

module.exports = {get, getById, insert, update, remove};