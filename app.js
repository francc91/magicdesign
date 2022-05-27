
(function() {
    var formulario = document.getElementsByName('formulario')[0];

    var validarNombre = function(e){
        if(formulario.nombre.value == 0){
            alert('Pone tu nombre');
            e.preventDefeault();
        }
    };
    var validar = function(e){
        validarNombre(e);
    };
    formulario.addEventListener('submit', validar);
}())