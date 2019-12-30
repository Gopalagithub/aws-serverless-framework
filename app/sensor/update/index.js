const { saveAction } = require('./action');
const { saveDateToDb } = require('./service');

module.exports.handler = async (event, context, callback) => {
  const data = saveAction(event);
  return await saveDateToDb(data, callback);
};