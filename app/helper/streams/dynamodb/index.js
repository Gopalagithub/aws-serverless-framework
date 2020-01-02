'use strict';
const AWS = require("aws-sdk");
const sns = new AWS.SNS();

exports.handler = (event, context, callback) => {

    event.Records.forEach((record) => {
        if (record.eventName == 'REMOVE') {
            const sensorId = record.dynamodb.Keys.sensorId.S;
            const dateAndTime = new Date();
            const payload = JSON.stringify(record.dynamodb.OldImage.payload.S);
            const tableName = record.eventSourceARN.split(':')[5].split('/')[1];
            const params = {
                Subject: 'RECORD_DELETION_NOTIFICATION',
                Message: `Hi,<br/><br/> A record got deleted from the ${tableName} Table<br/><br/><br/>Record Details: <br/>sensorId: ${sensorId}<br/>payload: ${payload}<br/>DeletionTime: ${dateAndTime}`,
                TopicArn: 'arn:aws:sns:ap-south-1:344184308618:aws-serverless-assignment-dev-SensorsEventsDeletionTopic-6PL4QJI8BOE7'
            };
            sns.publish(params, function(err, data) {
                if (err) {
                    console.log("Unable to send message. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("Results from sending message: ", JSON.stringify(data, null, 2));
                }
            });
        }
    });
    callback(null, `Successfully processed ${event.Records.length} records.`);
};