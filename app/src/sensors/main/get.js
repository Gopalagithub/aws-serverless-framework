const { sensorAction } = require('../controller/get');
const { sensorDbOperation } = require('../model/get');

module.exports.handler = async (event, context, callback) => {
  const data = sensorAction(event);
  return await sensorDbOperation(data, callback);
};