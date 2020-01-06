const { getSingleItemFromDB } = require('../../../../app/src/sensors/model/get');

test('getSingleItemFromDB should be a function.', ()=>{
    expect(typeof getSingleItemFromDB).toBe('function');
});