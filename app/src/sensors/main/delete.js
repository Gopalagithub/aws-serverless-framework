const { deleteAction } = require('../controller/delete');
const { deleteDataFromDB } = require('../model/delete');

module.exports.handler = async (event) => {
  const data = deleteAction(event);
  return await deleteDataFromDB(data);
};