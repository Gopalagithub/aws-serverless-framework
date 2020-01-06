
/**
  * Returns an IAM policy document for a given user and resource.
  *
  * @method buildIAMPolicy
  * @param {String} effect  - Allow / Deny
  * @param {String} resource - resource ARN
  * @returns {Object} policyDocument
  */
exports.buildIAMPolicy = (effect, resource) => {
  var authResponse = {};
  authResponse.principalId = 'user';
  if (effect && resource) {
    var policyDocument = {};
    policyDocument.Version = '2012-10-17';
    policyDocument.Statement = [];
    var statementOne = {};
    statementOne.Action = 'execute-api:Invoke';
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }
  return authResponse;
};