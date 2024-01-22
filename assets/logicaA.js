
function enviarDatos(){
    const nombre = document.getElementById('nombre').value;
    enviarDatosAlServidor(nombre)
    .then(mensajeAgradecimiento)
    .catch(mensajeError);
}

function enviarDatosAlServidor(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito =(nombre.toLowerCase() !== 'error');
           const resultado = (exito) ? `Bienvenido al Sistema ` : `Acceso denegado`;
              (exito) ? resolve(resultado) : reject(resultado);
        }, 2000);

    });
};

function mensajeAgradecimiento(mensaje){
    const mensajeElemnt = document.getElementById('mensaje');
    mensajeElemnt.textContent = mensaje;
    mensajeElemnt.classList.remove('oculto');
}

function mensajeError(error){
    const errorElemnt = document.getElementById('mensaje');
    errorElemnt.textContent = error;
    errorElemnt.classList.remove('oculto');
}