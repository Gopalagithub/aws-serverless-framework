const {sensors} = require('../../../schema/sensor');
const {response} = require('../../../helper/index');

module.exports.saveDataToDb = async (params) => {
    try{
        const data = new sensors(params);
        await data.save();
        return response(201, {success: true});
    }catch(error){
        return response(500, {error: error});
    }
};