const { getAction } = require('../controller/get');
const { getSingleItemFromDB } = require('../model/get');

module.exports.handler = async (event) => {
  const data = getAction(event);
  return await getSingleItemFromDB(data);
};