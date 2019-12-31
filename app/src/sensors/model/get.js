const {client} = require('../../../helper/dynamodb_client/index');

module.exports.getByIdFromDB = async (params, callback) => {
    try{
      const data = await client.scan(params).promise();
      responseBody = JSON.stringify(data.Items);
      statusCode = 200;

      return {
        statusCode: statusCode,
        headers: {
            'Content-Type': "application/json"
        },
        body: responseBody,
        isBase64Encoded: false
      };
    }catch(error){
        throw error;
    }
};