module.exports.listAction = () => {
    const params = {
      TableName: process.env.DYNAMODB_TABLE
    };
    return params;
}