# Documentacion de Uso

# Ambiente AWS
1. Crear usuario y establecer permiso de AdministratorAccess
2. Crear tabla en Dynamodb, con el nombre "DynamoDb"
3. Configurar usuario (aws_access_key_id y aws_secret_access_key)

# Configuracion adicional
1. Configurar region en serverless.yml: us-east-2  (en mi caso).

# Ambiente Desarrollo
1. Clonar el repositorio
2. Instalar el app --> $ npm install
3. Ejecutar el app de manera local gracias a serverless - offline --> $ npm run start
4. Despliegar el app --> $ sls deploy
5. Comentarios sobre las rutas del reto tecnico
/utils/util -> Validaciones de algunos parametros de entrada y salida.
/test/utils7persona/aplication -> Test del endpoint -> http://localhost:3000/dev/crearPersona
/apisPostman -> Documentación en Open API/Swagger
/dev/crearPersona -> sirve para crear un registro nuevo de persona
/dev/obtenerPersonas -> sirve para listar todos los personas
/dev/llenarDynamo10x10 -> consume el api de StarWars , trasnforma los atributos al castellano y lo inserta en Dynamo, hace este llenado 10 veces (solo usar 1 vez si se quiere usar mas veces cambiar el idInicial en el archivo llenarBaseDeDatos.js)

# Para Testear
1. Ejecutar el app gracias a jest -> npm run test 
