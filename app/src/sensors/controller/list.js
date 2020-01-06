const {response} = require('../../../helper/index');
const {listAllDataFromDB} = require('../model/list')

module.exports.listAction = async (event) => {
  try{
    const data = JSON.parse(event.body);
    const supportedFields = ['type', 'deviceId']
    let filteredFields = Object.keys(data).filter((item)=>{
      return supportedFields.indexOf(item) >= 0;
    });
    let badFields = Object.keys(data).filter((item)=>{
      return supportedFields.indexOf(item) < 0;
    });
    
    if(badFields.length > 0){
      throw new Error( 'Bad request, Please check request body!');
    }
    switch(filteredFields.length){
      case 1:
            if(filteredFields[0] === 'deviceId'){
              return await listAllDataFromDB({
                FilterExpression: 'clientId = :deviceId',
                ExpressionAttributeValues: {
                  ':deviceId': data.deviceId
                }
              });
            }else{
              return await listAllDataFromDB({
                FilterExpression: 'sensorType = :type',
                ExpressionAttributeValues: {
                  ':type': data.type,
                }
              });
            }
      case 2:
            return await listAllDataFromDB({
              FilterExpression: 'sensorType = :type AND clientId = :deviceId',
              ExpressionAttributeValues: {
                  ':type': data.type,
                  ':deviceId': data.deviceId
              }
            });
      }
      
  }catch(error){
      return response(500, {error: error.message});
  }
}
