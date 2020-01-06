const {response} = require('../../../helper/index');

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