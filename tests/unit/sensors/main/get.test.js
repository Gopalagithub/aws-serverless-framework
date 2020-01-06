const { handler } = require('../../../../app/src/sensors/main/get');
let {getSingleItemFromDB} = require('../../../../app/src/sensors/model/get');
let {getAction} = require('../../../../app/src/sensors/controller/get');

test('Handler > getAction should be a function.', () => {
    expect(typeof handler).toBe('function');
});