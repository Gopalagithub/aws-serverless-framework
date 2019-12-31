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
exports.handler = async (event, context, callback) => {
    try{
        const params = {
            Names: ['/mySense/Secrets/dev'],
            WithDecryption: true
        };
        let apiKey;
        let effect;
        apiKey = await ssm.getParameters(params).promise();
        apiKey = apiKey.Parameters[0].Value;
        (event.authorizationToken === apiKey)? 'Allow': 'Deny';
        const policyDocument = buildIAMPolicy(event, effect, event.methodArn);
        return policyDocument;
    }catch(error){
        console.log(error);
        return 'Unauthorized';
    }
};