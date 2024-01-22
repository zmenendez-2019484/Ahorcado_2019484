
async function enviarDatos(){
    const nombre = document.getElementById('nombre').value;
    try{
        const resultado= await enviarDatosAlServidor(nombre);
        mensajeAgradecimiento(resultado);
    }catch(error){
        mensajeError(error); 
    }
}

function enviarDatosAlServidor(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito =(nombre.toLowerCase() !== 'error');
            if (exito){
                resolve(`Bienvenido al Sistema `);
            }else{
                reject(`Acceso denegado`);
            }
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