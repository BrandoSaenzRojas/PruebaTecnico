const { DynamoDB } = require('aws-sdk');
const utils = require('../../utils/util');
const dynamoDb = new DynamoDB.DocumentClient();


async function obtenerPersonas(event) {
  // console.log(`Success`,event);
  const params = {
    TableName: process.env.PERSONA_DYNAMODB_TABLE
  }
  return dynamoDb.scan(params)
    .promise()
    .then(response =>{
      // Muesta registros
      console.log("Trama: "+JSON.stringify(response.Items));
      // Valida si hay registros y la cantidad
      valor = Object.keys(response.Items).length;
      let validadCantlist = utils.validadCantlist(valor);
      console.log(JSON.stringify("Hay: "+response.Items.length+" registros"));
      console.log("cantidad de registros: "+ validadCantlist);

      return {data:response.Items};
    })
    .catch(error =>{
      console.error(error);
      return {message: 'erro en dynamoDb'}
    })
  
}
module.exports = obtenerPersonas;
