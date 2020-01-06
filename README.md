# AWS Serverless Assignment

    # Overview

    I have assumed some real time feature while implimenting the solution. I have taken the fuel 
    tank gauge which has the sesnors for messuring the tank level to notify the users via email
    and slack. based on the use case i have created the API, i have assumed the flow saying,
    All the way the sensor data is raised from the fuek tank gauge gets delivered into dynamoDB
    via IoT core real but as we have no devices available its been populated from the API Gateway 
    directly through Rest API. 

    Sensor data is assumed to be have json structure and it should have the clientId, 
    SensorType and Properties to be mandatory.

    ClientId: its a device ID.
    SesnorType: Its a type of the sensor, every device will have a multiple sensors.
                hence i have used sensorType to distinguish the properties data.
                say fuel-leak-detector sensors will have a different properties than the 
                fuel-pump sensors.


    API Design:
        Model : {
            sesnorId: {
                type: uuid,
                hash key
            },clientId: {
                type: uuid,
            },sensorType: {
                type: uuid,
            },properties: {
                type: uuid,
            }
        }

        Lambda is Created for each and every Endpoint and 

        Create API is to populate the sensor data to dynamoDB.
            *) Positive Cases
            *) Negative Cases
        Delete API is to delete the sensor data using sensorId is hash key
            *) Positive Cases
            *) Negative Cases
        get API by sensorId in the sensor data.
            *) Positive Cases
            *) Negative Cases
        List/Filter API by sensorType, clientId(deviceId) in the sensor data.
            *) Positive Cases
            *) Negative Cases

    SNS Notification and Slack Notification
        *) I have created the Lambda to publish the details of the sensor data on every deletion
           I have used dynamoDB streams to achieve this.
    
    Custom Authorizer
        *) I have enabled custom authorizer based on the SSM parameter store secret key available.
    
    SSM Parameter Store:
        *) I have stored the secret key using KMS from Systems manager parameter store, right now
           It has been configured manually through console.
