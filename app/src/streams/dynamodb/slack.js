const https = require('https');
const url = require('url');
// to get the slack hook url, go into slack admin and create a new "Incoming Webhook" integration
const slack_url = 'https://hooks.slack.com/services/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';
const slack_req_opts = url.parse(slack_url);
slack_req_opts.method = 'POST';
slack_req_opts.headers = {'Content-Type': 'application/json'};

module.exports.slackCall = (message, context) => {
            const req = https.request(slack_req_opts, function (res) {
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
};