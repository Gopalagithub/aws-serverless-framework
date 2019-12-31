module.exports.deleteAction = (event) => {
    const data = JSON.parse(event.body);
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        sensorId: data.sensorId
      },
    };
    return params;
}
