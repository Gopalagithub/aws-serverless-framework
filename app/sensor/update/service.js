const client = require('../../helper/dynamodb');

module.exports.saveDateToDb = async (params, callback) => {
    try{
      const data = await client.put(params).promise();
      responseBody = JSON.stringify(data);
      statusCode = 201;
    }catch(error){
        responseBody = 'Unable to update the sensorsData!!';
        statusCode = 403;
    }
  
    return {
      statusCode: statusCode,
      headers: {
          'Content-Type': "application/json"
      },
      body: responseBody,
      isBase64Encoded: false
    };
};