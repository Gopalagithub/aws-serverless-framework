const {client} = require('../../../helper/dynamodb_client/index');

module.exports.saveDateToDb = async (params, callback) => {
    try{
      const data = await client.put(params).promise();
      responseBody = JSON.stringify(data);
      statusCode = 201;
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