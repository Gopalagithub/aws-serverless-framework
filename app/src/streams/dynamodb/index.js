const { slackCall } = require('./slack');
const { sns } = require('../../../helper/index');

// exports.handler = (event, context, callback) => {
//     event.Records.forEach((record) => {
//         if (record.eventName == 'REMOVE') {
//             const sensorId = record.dynamodb.Keys.sensorId.S;
//             const dateAndTime = new Date();
//             const properties = JSON.stringify(record.dynamodb.OldImage.properties.S);
//             const sensorType = JSON.stringify(record.dynamodb.OldImage.sensorType.S);
//             const tableName = record.eventSourceARN.split(':')[5].split('/')[1];
//             const params = {
//                 Subject: 'RECORD_DELETION_NOTIFICATION',
//                 Message: `Hi, A record got deleted from the ${tableName}. Record Details: sensorId: ${sensorId}, sensorType: ${sensorType}, properties: ${properties} DeletionTime: ${dateAndTime}`,
//                 TopicArn: 'arn:aws:sns:ap-south-1:344184308618:aws-serverless-assignment-dev-SensorsEventsDeletionTopic-6PL4QJI8BOE7'
//             };
//             sns.publish(params, function(err, data) {
//                 if (err) {
//                     console.log("Unable to send message. Error JSON:", JSON.stringify(err, null, 2));
//                 } else {
//                     console.log("Results from sending message: ", JSON.stringify(data, null, 2));
//                 }
//             });
//             slackCall(params.Message, context);
//         }
//     });
//     callback(null, `Successfully processed ${event.Records.length} records.`);
// };

/**
 * @description this function is call once dynamodb trigger event occurs and it sends the sns and slack notification. 
 * @method getSingleItemFromDB
 * @return {Response}
 * @param {event} Object
 * @param {context} Object
 * @param {callback} function
 */
exports.handler = (event, context, callback) => {
    try{
        event.Records.forEach((record) => {
            if (record.eventName == 'REMOVE') {
                const tableName = record.eventSourceARN.split(':')[5].split('/')[1];
                const params = {
                    Subject: 'RECORD_DELETION_NOTIFICATION',
                    Message: `A record got deleted from the ${tableName}. Record Details:
                              sensorId: ${record.dynamodb.Keys.sensorId.S}, 
                              sensorType: ${record.dynamodb.OldImage.sensorType.S}, 
                              properties: ${record.dynamodb.OldImage.properties.S} 
                              DeletionTime: ${new Date()}`,
                };
                const Sns = new sns(params);
                Sns.publish();
                slackCall(params.Message, context);
            }
        });
    }catch(error){
        return response(500, {Error: error.message});
    }
};