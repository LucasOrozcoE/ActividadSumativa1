//definiendo un arreglo nombre de errores

let arreglo = new Array();
arreglo[0]="errorNombre";
arreglo[1]="errorApellido";
arreglo[2]="errorEmail";
arreglo[3]="errorUsuario";
arreglo[4]="errorPassword";
arreglo[5]="errorConfirmar";

function validar(){
    var entrada = new Array();
    entrada [0]=document.getElementById('nombre').value;
    entrada [1]=document.getElementById('apellido').value;
    entrada [2]=document.getElementById('email').value;
    entrada [3]=document.getElementById('user').value;
    entrada [4]=document.getElementById('password').value;
    entrada [5]=document.getElementById('confirmarpassword').value;

    var error = new Array();
    error[0] = "<span style='color:red'> Ingrese el nombre!! </span>";
    error[1] = "<span style='color:red'> Ingrese el apellido!! </span>";
    error[2] = "<span style='color:red'> Ingrese el email!! </span>";
    error[3] = "<span style='color:red'> Ingrese el usuario!! </span>";
    error[4] = "<span style='color:red'> Ingrese el password!! </span>";
    error[5] = "<span style='color:red'> Ingrese el confirmación del Password!! </span>"; 

    //definiendo un ciclo foreach
    for(i in entrada){
        var mensajeError=error[i];
        var valorArreglo=arreglo[i];
        if(entrada[i]==""){
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        }
        else if(i==2){
            var arroba = entrada[i].indexOf("@");
            var punto=entrada[i].lastIndexOf(".");
            if(arroba<1 || punto < arroba + 2 || entrada[i].length<punto + 2){
                document.getElementById('errorEmail').innerHTML = 
                "<span style='color:red'> Ingrese un email valido!! </span>";
            }
            else{
                document.getElementById('errorEmail').innerHTML = 
                "Campo Válido!";
            }
        }
        else if (i == 5){
            var primero = document.getElementById('password').value;
            var segundo = document.getElementById('confirmarpassword').value;

            if(primero != segundo){
                document.getElementById('errorConfirmar').innerHTML = 
                "<span style='color:red'> Los password no coinciden </span>";
            }
            else{
                document.getElementById('errorConfirmar').innerHTML = 
                "Campo Válido!";
            }
        }
        else{
            document.getElementById(valorArreglo).innerHTML=
            "Campo Válido!";
        }
    }
}

function validarTodos(){
    var contador = 0;
    for(i=0; i<6; i++){
        var valorArreglo = arreglo[i];
        if( document.getElementById(valorArreglo).innerHTML == "Campo Válido!!"){
            contador++;
        }
    }
    if(contador == 6){
        document.getElementById('mensajefinal').innerHTML = "Formulario validado!!"
    }
}
