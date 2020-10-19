const { IoT1ClickDevicesService } = require('aws-sdk');
const utils = require('../../src/utils/util');

it('Test Fn(getOperation)', () => {
    const a = "lunes";
    const b = "martes";
    const result = true;
    expect(utils.Comparar(a,b)).toStrictEqual(result);
});