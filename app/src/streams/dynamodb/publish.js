const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-south-1'});


class SimpleNotificationService {
    constructor(event){
        this.sns = new AWS.SNS();
        this.params = {
            Message: JSON.stringify({
                        TableName:  'SensorDataTable',
                        SensorId : 'sjhad128731283zzcbs,bc01239283'
                    }),
            TopicArn: 'arn:aws:sns:ap-south-1:344184308618:aws-serverless-assignment-dev-SensorsEventsDeletionTopic-U06ZAK3NFXU6'
        };        
    }

    publish(){
        try{
            return this.sns.publish(this.params).then(data => data.MessageId);
        }catch(error){
            throw error;
        }
    }
}

module.exports = SimpleNotificationService;