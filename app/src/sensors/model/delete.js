const {sensors} = require('../../../schema/sensor');
const {response} = require('../../../helper/index');

module.exports.deleteDataFromDB = async (params) => {
    try{
        await sensors.delete(params, {'update': true});
        return response(204, {success: true});
    }catch(error){
        return (error instanceof SyntaxError) ? response(500, {error: error}): response(400, {error: error});
    }
};