const {response} = require('../../../helper/index');
/**
  * Function validates and passthrough the request to data model
  * @method getAction
  * @param {Object} event
  * @returns {String} sensorId
  */
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
