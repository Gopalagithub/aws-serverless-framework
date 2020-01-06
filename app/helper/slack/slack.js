const https = require('https');
const url = require('url');
/**
 * @class Slack
 * @description This class writes the content on your channel.
 */
class Slack{
    /**
     * @constructor
     * @param {*} params 
     */
    constructor(params){
        this.params = params;
        this.params.slackUrl = 'https://hooks.slack.com/services/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';
        this.params.slackReqOpts = url.parse(this.params.slackUrl);
        this.params.slackReqOpts.method = 'POST';
        this.params.slackReqOpts.headers = {'Content-Type': 'application/json'};

    }

    /**
     * @description Publish the message on slack
     * @returns null
     * @function publish
     */
    async publish(context){
        try{
            const req = https.request(this.params.slackReqOpts, function (res) {
                if (res.statusCode === 200) {
                    context.succeed('posted to slack');
                } else {
                    context.fail('status code: ' + res.statusCode);
                }
            });

            req.on('error', function(e) {
                console.log('problem with request: ' + e.message);
                context.fail(e.message);
            });
            params = {
                text: message
            }
            req.write(JSON.stringify(params)); // for testing: , channel: '@vadim'
            
            req.end();
        }catch(error){
            throw error.message;
        }
    }
}

module.exports.slack = Slack;