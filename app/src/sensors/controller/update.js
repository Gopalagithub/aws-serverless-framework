const uuid = require('uuid');

module.exports.saveAction = (event) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        sensorId: data.sensorId
      },
      UpdateExpression: "set clientId = :n",
      ExpressionAttributeValues: {
        ":n" : "JustChill"
      },
      ReturnValues: "SENSOR_TABLE_UPDATED"
    };
    return params;
}