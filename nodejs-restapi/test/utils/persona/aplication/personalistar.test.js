const listar = require('../../../../src/persona/aplication/personaListar');

 
it('Test Fn(getOperation)', async() => {
    // const result = {
    //     "message": "erro en dynamoDb"
    // };
    const event = {};
    const data = await listar(event);
    expect(data);
});