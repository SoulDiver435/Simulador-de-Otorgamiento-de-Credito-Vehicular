//VARIABLES DE DATOS INGRESADOS Y BANDERAS DE COMPROBACIÓN
let nombre = "";
let apellido = "";
let marca = "";
let modelo = "";
let anho = "";
let precio = "";
let entrada = "";
let cantMeses = "";
let tasaInteres = "";
let ingresoMensual = "";
let deudas = "";
//VARIABLES PARA APLICAR CÁLCULOS
let montoCredito = "";
let cuotaMensual = "";
let capacidadPago = "";
//COMPROBADORES
let aprobacionCredito = "";
let compAprobado="";

//AQUI CREO UN ARRAY CON LAS MARCAS DISPONIBLES PARA ATRAPARLAS DESDE AHÍ
const marcasDisponibles = [
  "Hyundai",
  "Chevrolet",
  "Honda",
  "Suzuki",
  "Nissan",
  "Ford",
];

//AQUÍ MUESTRO EL PRIMER MENSAJE PARA SOLICITAR DATOS
nombre = prompt("Por favor, ingrese su nombre.");
console.log("Nombre: " + nombre);
//A PARTIR DE AQUÍ EMPIEZAN LAS CONDICIONES PARA CONTINUAR SOLICITANDO DATOS
if (nombre === "" || !isNaN(Number(nombre))) {//ME ASEGURO DE QUE LO INGRESADO SEA SOLO TEXTO
  alert("Por favor, ingrese su nombre correctamente. (Solo ingrese texto)");
} else {
  apellido = prompt("Por favor, ingrese su apellido.");
  console.log("Apellido: " + apellido);
  if (apellido === "" || !isNaN(Number(apellido))) {
    alert("Por favor, ingrese su apellido correctamente. (Solo ingrese texto)");
  } else {
    marca = prompt(
      "Por favor ingrese la marca del vehículo (Hyundai - Chevrolet - Honda - Suzuki - Nissan - Ford)"
    );
    console.log("Marca: " + marca);
    if (
      marca !== marcasDisponibles[0] &&
      marca !== marcasDisponibles[1] &&
      marca !== marcasDisponibles[2] &&
      marca !== marcasDisponibles[3] &&
      marca !== marcasDisponibles[4] &&
      marca !== marcasDisponibles[5]
    ) {
      alert("Por favor, ingrese una marca válida. (Solo una marca de la lista, exactamente escrita)");
    } else {
      modelo = prompt("Por favor, ingrese un modelo.");
      console.log("Modelo: " + modelo);
      if (modelo === null || modelo === "") {
        alert("Por favor, ingrese el modelo correctamente. (Solo ingrese texto)");
      } else {
        anho = parseInt(prompt("Por favor, ingrese el año del vehículo."));
        console.log("Año: " + anho);
        if (anho === null || isNaN(anho) || anho < 0 || anho === "") {//ME ASEGURO QUE LOS DATOS NO ESTEN VACÍOS, SEAN NÚMEROS O NO SEAN MONTOS NEGATIVOS
          alert("Por favor, ingrese un año válido. (Solo ingrese números)");
        } else {
          precio = parseInt(
            prompt("Por favor, ingrese el precio del vehículo (Dólares).")
          );
          console.log("Precio: " + precio);
          if (
            precio === null ||
            isNaN(precio) ||
            precio <= 0 ||
            precio === ""
          ) {
            alert("Por favor, ingrese un precio válido. (Solo ingrese números)");
          } else {
            entrada = parseInt(
              prompt("Por favor, ingrese el monto de entrada (Dólares).")
            );
            console.log("Entrada: " + entrada);
            if (
              entrada <= 0 ||
              entrada > precio ||
              entrada === null ||
              isNaN(entrada) ||
              entrada === ""
            ) {
              alert("Por favor, ingrese datos válidos de entrada. (Solo ingrese números)");
            } else {
              cantMeses = parseInt(
                prompt(
                  "Por favor, ingrese la cantidad de meses a financiar la compra del vehículo. (Entre 1 a 36 meses)"
                )
              );
              console.log("Cantidad de meses: " + cantMeses);
              if (//ESTABLEZCO EL RANGO DE MESES
                cantMeses < 1 ||
                cantMeses > 36 ||
                cantMeses === null ||
                isNaN(cantMeses) ||
                cantMeses === ""
              ) {
                alert("Por favor, ingrese un cantidad válida. (Solo ingrese números)");
              } else {
                tasaInteres = parseInt(
                  prompt(
                    "Por favor, ingrese la tasa de interés a aplicar al crédito (Entre un rango de 1% a 12%)"
                  )
                );
                console.log("Interés en porcentaje: " + tasaInteres);
                console.log(typeof tasaInteres);
                if (//ESTABLEZCO EL RANGO DE TASA DE INTERÉS
                  tasaInteres < 1 ||
                  tasaInteres > 12 ||
                  tasaInteres === null ||
                  isNaN(tasaInteres) ||
                  tasaInteres === ""
                ) {
                  alert("Por favor, ingrese un valor válido. (Solo ingrese números)");
                } else {
                  alert(
                    "A continuación se le solicitarán sus Datos Financieros"
                  );
                  ingresoMensual = parseInt(
                    prompt(
                      "Por favor, ingrese su ingreso mensual (El rango aceptado es entre 2000 - 15000 Dólares)"
                    )
                  );
                  console.log("Ingreso Mensual: " + ingresoMensual);
                  if (//ESTABLEZCO EL RANGO DE INGRESOS
                    ingresoMensual < 2000 ||
                    ingresoMensual > 15000 ||
                    ingresoMensual === null ||
                    isNaN(ingresoMensual) ||
                    ingresoMensual === ""
                  ) {
                    alert("Por favor, ingrese un valor válido. (Solo ingrese números)");
                  } else {
                    // alert("todo okkkkkkkkkk");
                    deudas = parseInt(
                      prompt(
                        "Por favor, ingrese el monto de sus Deudas Pendientes(Dólares)."
                      )
                    );
                    console.log("Deudas Pendientes: " + deudas);
                    if (
                      deudas < 0 ||
                      deudas === null ||
                      isNaN(deudas) ||
                      deudas === ""
                    ) {
                      alert("Por favor, ingrese una cantidad válida. (Solo ingrese números)");
                    } else {
                      alert(
                        "¡Muchas Gracias! A continuación se calculará y mostrará los resultados de su petición"
                      );
                      // CALCULANDO LOS RESULTADOS:
                      montoCredito = precio - entrada;
                      console.log("Monto del Crédito: " + montoCredito);
                      cuotaMensual =
                        montoCredito / cantMeses +
                        ((montoCredito / cantMeses) * tasaInteres) / 100;
                      cuotaMensual = Math.floor(cuotaMensual);
                      console.log("Cuota Mensual Estimada: " + cuotaMensual);

                      capacidadPago = Math.floor(
                        (ingresoMensual - deudas) / cuotaMensual
                      );
                      console.log("Capacidad de Pago: " + capacidadPago);
                      aprobacionCredito = Math.floor(
                        ingresoMensual - deudas - cuotaMensual
                      );
                      console.log("Aprobación: " + aprobacionCredito);

                      //MOSTRANDO RESULTADOS EN EL DOC HTML
                      datosUsuario = document.getElementById("datosUsuario");
                      datosUsuario.innerHTML =
                        " <span style= 'color: #2eb38b;'> <b>Datos del Usuario: </b> </span> <br> <span style= 'color: #25909e;'><br> <b>Nombre del Usuario: </b></span>" + nombre + "<br>" + "<span style= 'color: #25909e;'><b>Apellido del Usuario: </b></span>" + apellido + "<br>"+ "<span style= 'color: #25909e;'><b>Ingreso Mensual: </b></span>" + "$"+ ingresoMensual +" Dólares" +"<br>" + "<span style= 'color: #25909e;'><b>Deudas Pendientes: </b></span>"+ "$"+ deudas + " Dólares";
                      escribirDatosVehiculo= document.getElementById("datosVehiculo"); 
                      escribirDatosVehiculo.innerHTML= "<span style= 'color: #2eb38b;'> <b>Datos del Vehículo:</b> <br><br> </span>  <span style= 'color: #25909e;'> <b>Marca: </b> </span>" + "<b>" + marca + "</b>" +"<br>" + "<span style= 'color: #25909e;'><b>"+"Modelo: " + "</b></span>"+"<b>" + modelo + "</b>" + "<br>"+"<span style= 'color: #25909e;'><b>Año: </b></span>" + "<b>" + anho + "</b>";
                      escribirPrecioVehiculo= document.getElementById("precioVehiculo");
                      escribirPrecioVehiculo.innerHTML="<span style= 'color: #2eb38b;'><b>Precio del Vehículo: </b></span>" + "$"+ precio + " Dólares";
                      escribirMontoCredito= document.getElementById("montoCreditoSolic");
                      escribirMontoCredito.innerHTML="<span style= 'color: #2eb38b;'><b>Monto del Crédito Solicitado: </b></span>" + "$"+ montoCredito + " Dólares" ;
                      escribirCuotaMensual=document.getElementById("cuotaMensual");
                      escribirCuotaMensual.innerHTML= "<span style= 'color: #2eb38b;'><b>Cuota Mensual Estimada: </b></span>" + "$"+ cuotaMensual + " Dólares";
                      escribirPlazo=document.getElementById("plazoPrestamo");
                      escribirPlazo.innerHTML=" <span style= 'color: #2eb38b;'><b>Plazo del Préstamo: </b></span>" + cantMeses + " Meses";
                      escribirTasaInt=document.getElementById("tasaInteres");
                      escribirTasaInt.innerHTML="<span style= 'color: #2eb38b;'><b>Tasa de Interés Aplicada: </b></span>" + tasaInteres +" %";
                      escribirCapUsuario=document.getElementById("capacidadPago");
                      escribirCapUsuario.innerHTML="<span style= 'color: #2eb38b;'><b>Capacidad de pago del Usuario: </b> </span>" + capacidadPago;
                      //CONDICIÓN QUE DETERMINA SI EL MENSAJE MOSTRADO CORRESPONDE A "APROBADO" O "DESAPROBADO"
                      if(aprobacionCredito>0){
                        compAprobado="Aprobado";
                        escribirResultado=document.getElementById("resultadoFinal");
                      escribirResultado.innerHTML="<span style= 'color: #2eb38b;'><b>Resultado de la simulación: </b></span>" + "<span style= 'color: #6687fd;'>"+ compAprobado+ "</span>";
                      }else{
                        compAprobado="Desaprobado";
                        escribirResultado=document.getElementById("resultadoFinal");
                        escribirResultado.innerHTML="<span style= 'color: #2eb38b;'><b>Resultado de la simulación: </b></span>" + "<span style= 'color: #e62e2e;'>"+ compAprobado + "</span>";
                      }
                      //CONDICIÓN QUE DETERMINA SI EL MENSAJE SE MUESTRA
                      if (compAprobado==="Aprobado" || compAprobado==="Desaprobado") {
                        mostrarImg= document.getElementById("imgCredito");
                        mostrarImg.style.display = "block"
                        
                      }
                    //FIN
                      
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// BUENAS TARDES, PROFESOR. AL IGUAL QUE EN ESTILOS, ALGUNOS COMANDOS EXTRAS QUE UTILICÉ FUERON EL STYLE.DISPLAY (PARA CAMBIAR UNO DE LAS PROPIEDADES DEL ELEMENTO CAPTURADO CON EL .GETELEMENTBY; EL MATH FLOOR, PARA ALINEAR HACIA ABAJO ALGÚN DATO QUE SALGA DECIMAL, Y EL USO DE ARRAYS CON VALORES DENTRO DE UNA VARIABLE, PARA LLAMARLOS LUEGO ( QUE LE MENCIONÉ EN CLASE).
// MUCHAS GRACIAS.