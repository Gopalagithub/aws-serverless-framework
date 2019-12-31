const { listAction } = require('../controller/list');
const { listAllDataFromDB } = require('../model/list');

module.exports.handler = async (event, context, callback) => {
  const data = listAction();
  return await listAllDataFromDB(data, callback);
};