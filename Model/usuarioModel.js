function UsuarioModel() {
    this.usuarioEvent = new UsuarioEvent();
    this.usuarios = [];
}

UsuarioModel.prototype
.validarDatos = function(username, pass, passValidation, email) {
    validarEmailRegistrado(email);
    validarPassword(pass, passValidation)
}

UsuarioModel.prototype
.registrarUsuario = function(username, pass, email){
    try{
        //El value tiene que ser un string

    //paso 1: obtengo el array de usuarios, es un string
    let usuarios = localStorage.getItem("usuarios") || "[]";
    //Es esto mismo: if (localStorage.get("usuarios") == undefined { usuarios = [];}
    

    //paso 2: lo convierto a array
    usuarios = JSON.parse(usuarios);

    //paso3: pusheo e;l nuevo usuario
    usuarios.push(new Usuario(username, pass, email));

    //paso 4: lo vuelvo a guardar en la base como string
    localStorage.setItem("usuario", JSON.stringify(usuarioCreado)); 
    
    // avisamos que el usuario se registro
    usuarioEvent.publicar();
    
    }
    catch(err) {
    console.log(err);
    }
}

function validarEmailYUsernameRegistrado(username, email) {
    //Paso 1: obtenemos los usuarios del sistema
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || "[]";

    //paso 2: buscamos si hay un usuario con el mismo username, por cada usuario me fijo si coincide el username
    if (usuarios.find(usuario => usuario.username == username)) {
        throw new Error ("El username ya existe");
    }
    
    if (usuarios.find(usuario => usuario.email == email)){
        throw new Error ("El email ya existe");
    }
    
}  

function validarPassword(pass, passValidation) {
    if(pass != passValidation) {
        throw new Error ("las contrasenas no coinciden");
    }
}

