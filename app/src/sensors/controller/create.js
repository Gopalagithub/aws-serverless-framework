const uuid = require('uuid/v1');
const {response} = require('../../../helper/index');

module.exports.saveAction = (event) => {
  try{
    const data = JSON.parse(event.body);
    if(event.body === undefined){
      throw new Error();
    }
    const params = {
        sensorId: uuid(),
        clientId: data.deviceId,
        sensorType: data.type,
        properties: JSON.stringify(data.details)
    };
    return params;
  }catch(error){
    return response(500, {error: error.message});
  }
}