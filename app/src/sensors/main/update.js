const { updateAction } = require('../controller/update');
const { saveDateToDb } = require('../model/update');

module.exports.handler = async (event) => {
  const data = updateAction(event);
  return await updateDataToDb(data);
};