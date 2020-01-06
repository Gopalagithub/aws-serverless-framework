const {response} = require('../../../helper/index');

module.exports.getAction = (event) => {
  try{
    if(event.pathParameters.sensorId === undefined){
      throw new Error();
    }
    return event.pathParameters.sensorId;
  }catch(error){
    return response(500, {error: error.message});
  }
}
