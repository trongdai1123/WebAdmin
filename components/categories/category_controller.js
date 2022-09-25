const categoryService = require('./category_service');

const get = async () =>{
    return await categoryService.get();
}

module.exports = {get};