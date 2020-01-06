const {response} = require('../../../helper/index');

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
