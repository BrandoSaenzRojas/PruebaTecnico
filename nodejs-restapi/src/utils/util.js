class utils{
    // validacion de personaRegistrar
    static Comparar(a,b) {
        if(a!=b){
            return true;
        }else{
            return false;
        }
    }

    static validarLetras(a,b,c){
        const pattern = new RegExp('^[A-Z]+$', 'i');
        if(!pattern.test(a)){
            console.log("Ingresar Nombre");
            return false;
        }else if(!pattern.test(b)){
            console.log("Ingresar Apellido Paterno");
            return false;    
        }else if(!pattern.test(c)){
            console.log("Ingresar Apellido Materno");
            return false;  
        }else{
            console.log("Correcto: validarLetras");
            return true;
        }            
    }
    static validarNumeroEdad(d){
        const patron = /^([\d\s]{2})$/
        if (patron.test(d)) {
            console.log('Correcto: validarNumeroEdad');
            return true;
          } else {
            console.log('Ingresar solo 2 digitos');
            return false;
          }
    }

    static validarNumeroCelular(e){
        const patron = /^([\d\s]{9})$/
        if (patron.test(e)) {
            console.log('Correcto: validarNumeroCelular');
            return true;
          } else {
            console.log('Ingresar solo 9 digitos');
            return false;
          }
    }
    // validacion de personaListar

    static validadCantlist(cantidad){
        if(cantidad <= 0 || cantidad == 0){
            console.log("No Hay registros");
            return false
        }else{
            console.log("Hay registros");
            return true;
        }
    }



};


module.exports = utils;