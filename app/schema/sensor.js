const dynamoose = require('dynamoose');
const validate = require('uuid-validate');

dynamoose.AWS.config.update({
  region: 'ap-south-1',
});

if (process.env.IS_OFFLINE) {
  dynamoose.local('http://localhost:8000');
}

const sensorDataTableSchema = new dynamoose.Schema({
  sensorId: {
    type: String,
    hashKey: true
  },
  clientId: {
    type: String,
    validate: (value)=>{
      return validate(value);
    },
    required: true
  },
  sensorType: {
    type: String,
    required: true
  },
  properties : {
    type: String,
    validate: (value)=>{
      return (value && typeof value === 'string')? true: false;
    },
    required: true
  },
  createdAt: Date
});
module.exports.sensors = dynamoose.model('SensorDataTable', sensorDataTableSchema, {
    create: true,
    update: true,
    waitForActive: true,
    waitForActiveTimeout: 180000,
    saveUnknown: ['sensorId', 'clientId', 'sensorType', 'properties'],
    useDocumentTypes: false,
    useNativeBooleans: false
});