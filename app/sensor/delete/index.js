const { deleteAction } = require('./action');
const { deleteDataFromDB } = require('./service');

module.exports.handler = async (event, context, callback) => {
  const data = deleteAction(event);
  return await deleteDataFromDB(data, callback);
};