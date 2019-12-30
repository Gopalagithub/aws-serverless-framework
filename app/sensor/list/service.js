const client = require('../../helper/dynamodb');

module.exports.listAllDataFromDB = async (params, callback) => {
    try{
      const data = await client.scan(params).promise();
      responseBody = JSON.stringify(data.Items);
      statusCode = 200;
    }catch(error){
        process.stderr.write(error);
        responseBody = 'Unable to list all the sensorsData!!';
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