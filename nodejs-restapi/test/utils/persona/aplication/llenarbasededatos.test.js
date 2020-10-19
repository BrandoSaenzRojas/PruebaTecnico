const llenar = require('../../../../src/persona/aplication/llenarBaseDeDatos');

 
it('Test Fn(getOperation)', async() => {
    // const result = {
    //     "message": "erro en dynamoDb"
    // };
    const event = {};
    const data = await llenar(event);
    expect(data);
});