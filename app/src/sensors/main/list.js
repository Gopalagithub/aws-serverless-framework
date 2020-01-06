const { listAction } = require('../controller/list');


module.exports.handler = async (event) => {
  return await listAction(event);
};