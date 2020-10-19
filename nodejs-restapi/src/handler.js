'use strict';

const personaListar = require('./persona/aplication/personaListar');
const personaRegistrar =  require('./persona/aplication/personaRegistrar');
const llenarBaseDeDatos =  require('./persona/aplication/llenarBaseDeDatos');

module.exports.crearPersona = async (event, context, callback) => {
    try {
        const data = await personaRegistrar(event);
        sendResponse(200, data, callback);
    } catch (error) {
        console.log(error);
        sendResponse(500, {message : "Ocurrio un error en Lambda"}, callback);
    }
   
}

module.exports.obtenerPersonas = async (event, context, callback) => {
    try {
        let data = {};
        data =  await personaListar();
        sendResponse(200, data, callback);
    } catch (error) {
        console.log(error);
        sendResponse(500, {message : "Ocurrio un error en Lambda"}, callback);
    }
    
}
module.exports.llenarDynamo10x10 = async (event, context, callback) => {
    try {
        let data = {};
        data = await llenarBaseDeDatos();
        sendResponse(200, data, callback);
    } catch (error) {
        console.log(error);
        sendResponse(500, {message : "Ocurrio un error en Lambda"}, callback);
    }
}

function sendResponse(statusCode, data, callback) {
	const response = {
		statusCode: statusCode,
		body: JSON.stringify(data)
	};
	callback(null, response);
}
