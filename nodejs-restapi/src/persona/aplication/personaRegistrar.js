const { DynamoDB } = require('aws-sdk');
const uuidv1 = require('uuid/v1');
const utils = require('../../utils/util');

const dynamoDb = new DynamoDB.DocumentClient()

  async function personaRegistrar(event) {
   console.log(event);
  const data = JSON.parse(event.body)

  let persona = {
    id: uuidv1(),
    url: data.url,
    editado: data.editado,
    creado: data.creado,
    filmes: data.filmes,
    residentes: data.residentes,
    nombre:data.nombre,
    apellidoPaterno:data.apellidoPaterno,
    apellidoMaterno:data.apellidoMaterno,
    edad:data.edad,
    celular:data.celular,
    distrito:data.distrito,
  }
  let compare = utils.Comparar(persona.creado,persona.editado);
  console.log("Obtener compare: "+compare);
  let validarLetras = utils.validarLetras(persona.nombre, persona.apellidoPaterno, persona.apellidoMaterno);
  console.log("respuesta :"+validarLetras);
  let validarNumeroEdad = utils.validarNumeroEdad(persona.edad);
  console.log("respuesta :"+validarNumeroEdad);
  let validarNumeroCelular = utils.validarNumeroCelular(persona.celular);
  console.log("respuesta: "+validarNumeroCelular);
  const params = {
    TableName: process.env.PERSONA_DYNAMODB_TABLE,
    Item: persona
  }

  return dynamoDb.put(params)
    .promise()
    .then(() =>{
      return {message: 'Registro exitoso'};
    })
    .catch(error =>{
      return {message: 'erro en dynamoDb'}
    })
}

module.exports = personaRegistrar;
