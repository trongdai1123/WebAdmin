
const categoryModel = require('./category_model');

const get = async ()=>{
    return await categoryModel.find({});
}

module.exports = {get};


var categories = [{
    "_id": 1,
    "name": "Streptopelia senegalensis",
    "description": "Pudge"
  }, {
    "_id": 2,
    "name": "Spermophilus tridecemlineatus",
    "description": "Monteath"
  }, {
    "_id": 3,
    "name": "Phalacrocorax varius",
    "description": "Greatorex"
  }, {
    "_id": 4,
    "name": "Plectopterus gambensis",
    "description": "Stonner"
  }, {
    "_id": 5,
    "name": "Tayassu pecari",
    "description": "Nan Carrow"
  }, {
    "_id": 6,
    "name": "Mazama gouazoubira",
    "description": "Linsey"
  }, {
    "_id": 7,
    "name": "Pitangus sulphuratus",
    "description": "Barde"
  }, {
    "_id": 8,
    "name": "Macropus rufogriseus",
    "description": "Pilsworth"
  }, {
    "_id": 9,
    "name": "Charadrius tricollaris",
    "description": "Blades"
  }, {
    "_id": 10,
    "name": "Merops sp.",
    "description": "Fisk"
  }, {
    "_id": 11,
    "name": "Globicephala melas",
    "description": "Lisciandro"
  }, {
    "_id": 12,
    "name": "Milvago chimachima",
    "description": "Lubomirski"
  }, {
    "_id": 13,
    "name": "Tamandua tetradactyla",
    "description": "Goncalo"
  }, {
    "_id": 14,
    "name": "Lamprotornis nitens",
    "description": "Amos"
  }, {
    "_id": 15,
    "name": "Agkistrodon piscivorus",
    "description": "Blenkensop"
  }, {
    "_id": 16,
    "name": "Eudyptula minor",
    "description": "Selbie"
  }, {
    "_id": 17,
    "name": "Bassariscus astutus",
    "description": "Newns"
  }, {
    "_id": 18,
    "name": "Tamiasciurus hudsonicus",
    "description": "Gutman"
  }, {
    "_id": 19,
    "name": "Psophia viridis",
    "description": "Baynard"
  }, {
    "_id": 20,
    "name": "Caiman crocodilus",
    "description": "Woodstock"
}];