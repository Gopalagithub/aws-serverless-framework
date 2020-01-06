const {sensors} = require('../../../schema/sensor');
const {response} = require('../../../helper/index');

/**
 * @description this function gets all the details of sensors data
 * @method listAllDataFromDB
 * @return {Response}
 */
module.exports.listAllDataFromDB = async (filter) => {
    try{
        return await sensors.scan(filter).exec().then((ararayOfSensors)=>{
            const sensorsData = [];
            ararayOfSensors.forEach((item)=>{
                sensorsData.push({
                    id: item.sensorId,
                    type: item.sensorType,
                    deviceId: item.clientId,
                    data: item.properties
                });
            })
            return response(200, Object.freeze(sensorsData));
            
        });
    }catch(error){
        return response(500, {Error : error.message});
    }
};