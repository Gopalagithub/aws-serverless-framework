const {response} = require('../../../helper/index');

/**
  * Function validates and passthrough the request to data model
  * @method deleteAction
  * @param {Object} event
  * @returns {Object} sensorId
  */
module.exports.deleteAction = (event) => {
  try{
    if(event.pathParameters.sensorId === undefined){
      throw new Error();
    }
    return {sensorId: data.sensorId}; 
  }catch(error){
    return response(500, {error: error.message});
  }
}
