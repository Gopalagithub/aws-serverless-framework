const { saveAction } = require('../controller/create');
const { saveDataToDb } = require('../model/create');

module.exports.handler = async (event) => {
  const data = saveAction(event);
  return await saveDataToDb(data);
};