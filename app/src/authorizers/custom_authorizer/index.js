const AWS = require('aws-sdk');
const { buildIAMPolicy } = require('./policy');
const ssm = new AWS.SSM({region: 'ap-south-1'});

/**
  * Returns an IAM policy document for a given user and resource.
  *
  * @method handler
  * @param {Object} event
  * @param {Object} context - resource ARN
  * @param {function} callback
  * @returns {Object} policyDocument
  */
exports.handler = async (event) => {
    try{
        const params = {
            Name: "/mySense/Secrets/dev",
            WithDecryption: true
        };
        let apiKey;
        let effect;
        apiKey = await ssm.getParameter(params).promise();
        apiKey = apiKey.Parameter.Value;
        effect = (event.headers.Authorization === apiKey)? 'Allow': 'Deny';
        const policyDocument = await buildIAMPolicy(effect, event.methodArn);
        return policyDocument;
    }catch(error){
        throw error;
    }
};