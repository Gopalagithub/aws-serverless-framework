/**
 * @description : it returns the json response data.
 * @function {response}
 * @param {statusCode} Number
 * @param  {body} JSON
 * @returns JSON
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