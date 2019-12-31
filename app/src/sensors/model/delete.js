const {client} = require('../../../helper/dynamodb_client/index');

module.exports.deleteDataFromDB = async (params, callback) => {
    try{
      const data = await client.delete(params).promise();
      responseBody = JSON.stringify(data);
      statusCode = 204;

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