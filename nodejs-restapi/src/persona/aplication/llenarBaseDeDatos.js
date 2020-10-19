const { DynamoDB } = require('aws-sdk');
const modelo = require('../model/persona');
const uuidv1 = require('uuid/v1');
const dynamoDb = new DynamoDB.DocumentClient();
const fetch = require('node-fetch');

async function obtenerPersonas(event) {
  let response ={};
  // Aqui cambiar idInicial
  for (let idInicial = 1; idInicial <= 10; idInicial++) {
    let persona = await obtenerPersonaApiStarWars(idInicial);
    
    let personaAtributoOrdenado = Object.entries(persona).sort();
    personaAtributoOrdenado.push(["id",uuidv1()]);
    let periodoRotacion = personaAtributoOrdenado.sort().splice(11,1)
    personaAtributoOrdenado.splice(9,0,periodoRotacion[0])
    let nombreDeCampos = Object.keys(modelo).sort();
    let personaAtribustoEspañol = [[]];
    
    for (let i=0; i <= 14; i++) {
      personaAtribustoEspañol.push([nombreDeCampos[i],personaAtributoOrdenado[i][1]])
        
    }
    personaAtribustoEspañol.shift();
    
    let personaEspañol = Object.fromEntries(personaAtribustoEspañol);

    const params = {
        TableName: process.env.PERSONA_DYNAMODB_TABLE,
        Item: personaEspañol
      }
    response = dynamoDb.put(params)
    .promise()
    .then(() =>{
      return {message: 'Registro exitoso'};
    })
    .catch(error =>{
      return {message: 'erro en dynamoDb'}
    }) 
  }

  return response;

}

async function obtenerPersonaApiStarWars(idInicial){
    const data = await fetch(`https://swapi.py4e.com/api/planets/${idInicial}/`)
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        return myJson
      });
    return data;
}
module.exports = obtenerPersonas; 