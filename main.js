var prestamos = [];
const menuAdmin = () => {
  const loginAdmin = {
    user: "Admin",
    password: "Admin"                   //Declaro usuario/password de ingreso 
  };
  let conectado
  do {
    let user = prompt("Ingrese su Usuario");
    let password = prompt("Ingrese su Contraseña");
    if (user == loginAdmin.user && password == loginAdmin.password) {     //Si el login es correcto se llama a la funcion Menu.
      conectado = true
      mostrarMenu();
    }
    alert("Los datos ingresados no fueron correctos")
  } while (!conectado)
};

const mostrarMenu = () => {
  let menuOption = prompt(" Indique que operacion desea realizar: \n \
    1)Generar prestamo \n \
    2)Historial de operaciones \n \
    3)Cerrar sesion"
  );
  let option = parseInt(menuOption);
  switch (option) {
    case 1:             //funcion gPrestamo  "Generar Prestamo"
      gPrestamo();
      break;
    case 2:             //funcion histOp "Historial de operaciones"
      histOp();
      break;
    case 3:             //Si se selecciona se vuelve al Menu de Inicio de sesion.
      alert("Sesion finalizada.")
      menuAdmin()
      break;
    default:            //Si no se selecciona ninguna opcion, se solicita que se ingrese.
      alert("Debes ingresar una opcion correcta.");
  }
};

const gPrestamo = () => {
  function Prestamo(nombre, cantidad, cuotas, mensual) { //Funcion constructora del objeto para el prestamo
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.mensual = mensual;
    this.cuotas = cuotas;
  }

  let opcionsalir;      //debido al scope de la variable adentro del do la declaro afuera del mismo

  do {
    let nombre = prompt("Ingrese el nombre y apellido del cliente.");
    do {
      let cantidad = prompt("Ingrese el Monto del prestamo solicitado.");
      Cantidad = parseInt(cantidad);
      if (isNaN(Cantidad)) {        //si no se ingresa un valor numerico.
        alert("Debe ingresar un numero");
      }
    }
    while (isNaN(Cantidad));      //se ejecutara mientras no sea un valor numerico.
    do {
      let cuotas = prompt("Ingrese la cantidad de cuotas solicitadas.");
      Cuotas = parseInt(cuotas);
      if (isNaN(Cuotas)) { //si no es un valor numerico. 
        alert("Debe ingresar un numero");
      }
    }
    while (isNaN(Cuotas));        //se ejecutara mientras no se encuentre un valor numerico.
    let mensual = Cantidad / Cuotas;
    let prestamo1 = new Prestamo(nombre, Cantidad, Cuotas, mensual); //usando la funcion agrego un objeto con los valores en los parametros
    prestamos.push(prestamo1);      //añado el objeto al array usando el metodo push
    alert(
      `El prestamo se cargo correctamente a nombre de ${prestamo1.nombre} con una cantidad total de $${prestamo1.cantidad} y un debito mensual de $${prestamo1.mensual} durante ${prestamo1.cuotas} meses`
    );
    opcionsalir = prompt(
      "Si desea salir volver al menu ingrese 1 en caso de querer crear otro prestamo ingrese cualquier otra tecla."
    );
  } while (opcionsalir != "1");
  mostrarMenu();
};

const histOp = () => {
  let opcion;
  do {
    opcion = prompt(
      `Actualmente hay una cantidad de ${prestamos.length} prestamos cargados, ingrese nombre y apellido del cliente para acceder a su prestamo, en caso de querer volver atras ingrese "Salir"`
    );
    for (i = 0; i < prestamos.length; i++) {    //recorre el arreglo
      if (prestamos[i].nombre == opcion) {      //si coincide el nombre y apellido ingresado con la propiedad nombre del indice actual se ejecuta el codigo
        alert(
          `${prestamos[i].nombre} tiene un prestamo con un valor total de $${prestamos[i].cantidad} con un debito mensual de $${prestamos[i].mensual} durante ${prestamos[i].cuotas}`
        );
      } else if (opcion != "Salir") {           //en caso de que no coincida el nombre y no se ingrese Salir se informa que no hay ningun prestamo con ese nombre
        alert("El nombre ingresado no tiene ningun prestamo cargado.");
      }
    }
  } while (opcion != "Salir");                  //mientras no se ingrese Salir se ejecutara el codigo
  mostrarMenu();
};

menuAdmin();


