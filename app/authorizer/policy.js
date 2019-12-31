
/**
  * Returns an IAM policy document for a given user and resource.
  *
  * @method buildIAMPolicy
  * @param {String} effect  - Allow / Deny
  * @param {String} resource - resource ARN
  * @returns {Object} policyDocument
  */
exports.buildIAMPolicy = (event, effect, resource) => {
  var authResponse = {};
  authResponse.principalId = event.authorizationToken;
  if (effect && resource) {
    var policyDocument = {};
    policyDocument.Version = '2012-10-17'; // default version
    policyDocument.Statement = [];
    var statementOne = {};
    statementOne.Action = 'execute-api:Invoke'; // default action
    statementOne.Effect = effect;
    statementOne.Resource = "*";
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }
  return authResponse;
};