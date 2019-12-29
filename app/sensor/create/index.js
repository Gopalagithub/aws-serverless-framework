const { sensorAction } = require('./action');
const { sensorDbOperation } = require('./service');

module.exports.handler = async (event, context, callback) => {
  const data = sensorAction(event);
  return await sensorDbOperation(data, callback);
};