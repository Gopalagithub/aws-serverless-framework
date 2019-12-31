const uuid = require('uuid');

module.exports.saveAction = (event) => {
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