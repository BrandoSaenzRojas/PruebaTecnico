const registrar = require('../../../../src/persona/aplication/personaRegistrar');

 
it('Test Fn(getOperation)', async() => {
    // const result = {
    //     "message": "erro en dynamoDb"
    // };
    const event = {
        body: '{\r\n' +
          '"url":"www.peru.com",\r\n' +
          '"editado":"true",\r\n' +
          '"creado":"Si",\r\n' +
          '"filmes":"123",\r\n' +
          '"residentes":"123",\r\n' +
          '"nombre":"Brando",\r\n' +
          '"apellidoPaterno":"Saenz",\r\n' +
          '"apellidoMaterno":"Rojas",\r\n' +
          '"edad":"11",\r\n' +
          '"celular":"123456781",\r\n' +
          '"distrito":"SMP"\r\n' +
          '}',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'PostmanRuntime/7.26.5',
          Accept: '*/*',
          'Postman-Token': 'a417d412-499b-45d6-8cd9-1d889881a159',
          Host: 'localhost:3000',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive',
          'Content-Length': '232'
        },
        httpMethod: 'POST',
        isBase64Encoded: false,
        multiValueHeaders: {
          'Content-Type': [ 'application/json' ],
          'User-Agent': [ 'PostmanRuntime/7.26.5' ],
          Accept: [ '*/*' ],
          'Postman-Token': [ 'a417d412-499b-45d6-8cd9-1d889881a159' ],
          Host: [ 'localhost:3000' ],
          'Accept-Encoding': [ 'gzip, deflate, br' ],
          Connection: [ 'keep-alive' ],
          'Content-Length': [ '232' ]
        },
        multiValueQueryStringParameters: null,
        path: '/crearPersona',
        pathParameters: null,
        queryStringParameters: null,
        requestContext: {
          accountId: 'offlineContext_accountId',
          apiId: 'offlineContext_apiId',
          authorizer: {
            claims: undefined,
            scopes: undefined,
            principalId: 'offlineContext_authorizer_principalId'
          },
          domainName: 'offlineContext_domainName',
          domainPrefix: 'offlineContext_domainPrefix',
          extendedRequestId: 'ckgfd7nyq0000g8ttcguv1xt2',
          httpMethod: 'POST',
          identity: {
            accessKey: null,
            accountId: 'offlineContext_accountId',
            apiKey: 'offlineContext_apiKey',
            caller: 'offlineContext_caller',
            cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
            cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
            cognitoIdentityId: 'offlineContext_cognitoIdentityId',
            cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
            principalOrgId: null,
            sourceIp: '127.0.0.1',
            user: 'offlineContext_user',
            userAgent: 'PostmanRuntime/7.26.5',
            userArn: 'offlineContext_userArn'
          },
          path: '/crearPersona',
          protocol: 'HTTP/1.1',
          requestId: 'ckgfd7nyr0001g8tt86sbad13',
          requestTime: '18/Oct/2020:12:09:44 -0500',
          requestTimeEpoch: 1603040984518,
          resourceId: 'offlineContext_resourceId',
          resourcePath: '/dev/crearPersona',
          stage: 'dev'
        },
        resource: '/dev/crearPersona',
        stageVariables: null
      };
    const data = await registrar(event);
    expect(data);
});