function  UsuarioController() {
    this.UsuarioModel = new UsuarioModel();
}

UsuarioController.prototype.registrarUsuario = function(username, pass, passvalidation, email) {

    try {
        this.UsuarioModel.validarDatos(username, pass, passValidation, email);

        this.UsuarioModel.registrarUsuario(username, pass, email);
    }
    catch(error){
        throw error;
    }
}

UsuarioController.prototype.login = function(username,pass) {

}