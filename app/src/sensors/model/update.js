const {sensors} = require('../../../schema/sensor');
const {response} = require('../../../helper/index');

/***
 * 
 */
module.exports.updateDataToDb = async (params) => {
    try{
        const data = await sensors.update(params.properties, {sensorId : params.sensorId});
        return response(201, {succes: true})
    }catch(error){
        return response(500, {error: error});
    }
};