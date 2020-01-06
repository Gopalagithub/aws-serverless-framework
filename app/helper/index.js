const {response} = require('./response/response')
    , {slack} = require('./slack/slack')
    , {sns} = require('./sns/sns')

module.exports = {
    response: response,
    slack: slack,
    sns: sns
};
