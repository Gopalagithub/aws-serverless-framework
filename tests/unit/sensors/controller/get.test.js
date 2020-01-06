const { getAction } = require('../../../../app/src/sensors/controller/get');

test('getAction should be a function.', () => {
    expect(typeof getAction).toBe('function');
});

test('getAction should return sensorId.', ()=>{
    const event = { pathParameters: {
        sensorId : 'Testing-sample'
    }};
    expect(getAction(event)).toBe('Testing-sample');
});

test('getAction should return Error Object.', ()=>{
    let result = getAction(null);
    result = result.then((data)=>{
        console.log(data);
        expect(data.statusCode).toBe(500);
    });
});