var usuarioController = new UsuarioController();
var usuarioEvent = new UsuarioEvent();

usuarioEvent.agregarSuscripcion(() => alert ("usuario registrado!")); 

document.getElementById("registerButton")
    .addEventListener("click", () => {
        
        //Destructuring
        [username, pass, passValidation, email] = obtenerDatosRegistro();
        //esto lo vieron en la clase que falte, buscar que significa
        try {
            UsuarioController.registrarUsuario(username, pass, passValidation, email);
        }
        catch(error){
            document.getElementById("errorMessage").innerText = error.message;
            document.getElementById("errorMessage").style.display = "block";
        }

        UsuarioController.registrarUsuario(username, pass, passValidation, email);
    });
     

    //Destructuring
    // var [a, b] = [1, 2, 3];
    // var [a, ...b] = [1, 2, 3];

    function obtenerDatosRegistro() {
        let username = document.getElementById("userRegister").value;
        let pass = document.getElementById("passRegister").value;
        let passvalidation = document.getElementById("passValidation").value;
        let email = document.getElementById("email").value;

    }