//definiendo un arreglo nombre de errores

let arreglo = new Array();
arreglo[1]="errorEmail";
arreglo[2]="errorPassword";
arreglo[3]="errorConfirmar";

function validar(){
    var entrada = new Array();
    entrada [1]=document.getElementById('emaillogin').value;
    entrada [2]=document.getElementById('passwordlogin').value;
    entrada [3]=document.getElementById('confirmarpasswordlogin').value;

    var error = new Array();
    error[1] = "<span style='color:red'> Ingrese el email!! </span>";
    error[2] = "<span style='color:red'> Ingrese el password!! </span>";
    error[3] = "<span style='color:red'> Ingrese el confirmación del Password!! </span>"; 

    //definiendo un ciclo foreach
    for(i in entrada){
        var mensajeError=error[i];
        var valorArreglo=arreglo[i];
        if(entrada[i]==""){
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        }
        else if(i==1){
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
        else if (i == 3){
            var primero = document.getElementById('passwordlogin').value;
            var segundo = document.getElementById('confirmarpasswordlogin').value;

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
    for(i=0; i<2; i++){
        var valorArreglo = arreglo[i];
        if( document.getElementById(valorArreglo).innerHTML == "Campo Válido!!"){
            contador++;
        }
    }
    if(contador == 2){
        document.getElementById('mensajefinal').innerHTML = "Formulario validado!!"
    }
    window.location.href = 'C:\Users\lorozcoe\Desktop\Proyectos\Proyectos Front\actividadesFrontEnd\Actividad Sumativa\index.html';
}
