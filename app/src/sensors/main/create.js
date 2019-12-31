const { saveAction } = require('../controller/create');
const { saveDateToDb } = require('../model/create');

module.exports.handler = async (event, context, callback) => {
  const data = saveAction(event);
  return await saveDateToDb(data, callback);
};