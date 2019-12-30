const { listAction } = require('./action');
const { listAllDataFromDB } = require('./service');

module.exports.handler = async (event, context, callback) => {
  const data = listAction();
  return await listAllDataFromDB(data, callback);
};