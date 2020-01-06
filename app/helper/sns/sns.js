const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-south-1'});

/**
 * @class {SimpleNotificationService}
 * @param {params} Object
 */
class SimpleNotificationService {
    /**
     * @constructor
     * @param {*} params
     */
    constructor(params){
        this.sns = new AWS.SNS();
        this.topicName = 'SensorsEventsDeletionTopic';
        this.service = 'aws-serverless-assignment';
        this.stage = 'dev';
        this.region = 'ap-south-1';
        this.accountId = '344184308618';
        this.params = params;
        this.params.TopicArn = `arn:aws:sns:${this.region}:${this.accountId}:${this.service}-${this.stage}-${this.topicName}*`;
    }

    /**
     * @description: publish the message to the intenteded reciepent.
     * @return {MessageId} UUID
     */
    publish(){
        try{
            return this.sns
                    .publish(this.params)
                    .then(data => data.MessageId);
        }catch(error){
            throw error;
        }
    }
}

module.exports.sns = SimpleNotificationService;