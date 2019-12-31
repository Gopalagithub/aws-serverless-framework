const { saveAction } = require('../controller/update');
const { saveDateToDb } = require('../model/update');

module.exports.handler = async (event, context, callback) => {
  const data = saveAction(event);
  return await saveDateToDb(data, callback);
};