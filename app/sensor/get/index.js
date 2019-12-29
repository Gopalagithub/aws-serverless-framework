const uuid = require('uuid');
const client = require('../../helper/dynamodb');

module.exports.handler = async (event, context, callback) => {
  const data = sensorAction(event);
  return await sensorDbOperation(data, callback);
};


const sensorAction = (event) => {
  const timestamp = new Date().getTime();
  const data = event.body;
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      sensorId: uuid.v1(),
      payload: data,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };
  return params;
}

const sensorDbOperation = async (params, callback) => {
  try{
    const data = await client.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  }catch(error){
      responseBody = 'Unable to put sensorsData!!';
      statusCode = 403;
  }

  callback(null, {
    statusCode: statusCode,
    headers: {
        'Content-Type': "application/json"
    },
    body: responseBody,
    isBase64Encoded: false
  });
}