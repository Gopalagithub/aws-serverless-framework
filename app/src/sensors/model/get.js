const {sensors} = require('../../../schema/sensor');
const {response} = require('../../../helper/index');

/**
 * @description this function gets the details by sesnorId
 * @method getSingleItemFromDB
 * @return {Response}
 * @param {sensorId}
 */
module.exports.getSingleItemFromDB = async (sensorId) => {
    try{
        return await sensors.get(sensorId).then((data) => {
            if(data === undefined){
                return response(404, {message: 'Resource not found.'});
            }
            const freezedObject = Object.freeze({
                id : data.sensorId,
                deviceType : data.sensorType,
                data: data.properties,
                deviceId: data.clientId
            });
            return response(200, {data : freezedObject});
        });
    }catch(error){
        return response(500, {Error : error.message});
    }
};