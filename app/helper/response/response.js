/**
 * @description : it returns the json response data.
 * @param {statusCode} Number
 * @body  {body} JSON
 * @function {response}
 */ 
module.exports.response = async (statusCode, body) => {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body),
        isBase64Encoded: false,
    };
}