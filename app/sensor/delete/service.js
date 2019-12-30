const client = require('../../helper/dynamodb');

module.exports.deleteDataFromDB = async (params, callback) => {
    try{
      const data = await client.delete(params).promise();
      responseBody = JSON.stringify(data);
      statusCode = 204;
    }catch(error){
        process.stderr.write(error);
        responseBody = 'Unable to delete sensorsData!!';
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