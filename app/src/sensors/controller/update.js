const {response} = require('../../../helper/index');
/**
  * Function validates and passthrough the request to data model
  * @method updateAction
  * @param {Object} event
  * @returns {String} sensorId
  */
module.exports.updateAction = (event) => {
  try{
    const data = JSON.parse(event.body);
    const params = {
        sensorId: data.sensorId,
        properties: data.properties
    };
    return params;
  }catch(error){
    if (e instanceof SyntaxError) {
      return response(500, {error: error});
    }else{
      return response(400, {error: error});
    }
  }
}