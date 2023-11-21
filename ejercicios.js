"use strict";

/* 1. Super ejercicio: Preguntar nombre al usuario y saludarlo por su nombre.
const nombre = prompt ('¿Como te llamas?');
alert ('Hola ' + nombre + ' es un gusto saludarte!')*/

/* 2. Super ejercicio: Preguntar nombre al usuario y saludarlo por su nombre. Si no puso su nombre saludarlo como hola desconocido 
const nombre = prompt ('¿Como te llamas?');*/

/*function saludarUsuario() {
  const nombre = prompt("Ingresa tu nombre");
  if (nombre) {
    document.write(`Hola, ${nombre}`);
  } else {
    document.write("Hola, desconocido");
  }
}
saludarUsuario();*/

// 3. Leer nombre y apellido, saludar por nombre y apellido.

/*function SaludarNombreApellido() {
  const nombre = prompt("¿Cual es tu nombre?");
  const apellido = prompt("¿Cual es tu apellido?");
  {
    document.write(`Hola, ${nombre} ${apellido} es un gusto saludarte!`);
  }
}
SaludarNombreApellido();*/

// 4. Pregunte al usuario si desea continuar, responder con hola o adiós.

/*function continuarPagina() {
  const continuar = confirm("¿Deseas continuar?");
  if (continuar) {
    document.write("Hola, nos alegra que sigas aqui!");
  } else {
    alert("Esperamos tenerte de vuelta pronto, adiós");
  }
}
continuarPagina();*/

// 5. Leer nombre y edad, Mostrar si es o no mayor de edad.

/*function nombreEdad() {
  const nombre = prompt("¿Cual es tu nombre?");
  const edad = prompt("¿Cual es tu edad?");
  if (edad >= 18) {
    document.write(`${nombre} eres mayor de edad`);
  } else {
    alert(nombre + " eres menor de edad");
  }
}
nombreEdad();*/

// 6. Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.

/*function accesoRoles() {
  const perfil = prompt(
    "¿A cual de las siguientes áreas pertences? administrativa, ventas, clientes"
  );
  switch (perfil) {
    case "administrativa":
      document.write("Dirigir a la sección administrativa");
      break;
    case "ventas":
      document.write("Dirigir a la sección de ventas");
      break;
    case "clientes":
      document.write("Dirigir a la sección de clienes");
      break;
    default:
      alert("El area indicada no existe");
  }
}
accesoRoles();*/

// Manera 2
/*const roles = {
admin: 'administrativa',
ventas: 'ventas',
cliente: 'clientes'}

const perfil = prompt ('¿A cual de las siguientes áreas pertences? administrativa, ventas, clientes');
if (roles.admin==perfil) {document.write('Dirigir a la sección administrativa');}
else if (roles.ventas==perfil) {document.write('Dirigir a la sección de ventas');}
else if (roles.cliente==perfil) {document.write('Dirigir a la sección de clientes');}
else {alert('El area indicada no existe');}*/

// 7. Leer un número, mostrar el doble de n.

/*function dobleN() {
  const numero = prompt("Ingrese un número");
  let resultado = numero * 2;
  document.write(`El doble de ${numero} es ${resultado}`);
}
dobleN();*/

// 8. Leer un número, mostrar la mitad de n.

/*function mitadN() {
  const numero = prompt("Ingrese un número");
  let resultado = numero / 2;
  document.write(`La mitad de ${numero} es ${resultado}`);
}
mitadN();*/

// 9. Leer un número, mostrar si es positivo, negativo o cero.
/*function escalaNumero() {
  const numero = prompt("Ingrese un número");
  if (numero > 0) {
    document.write(`El ${numero} es positivo`);
  } else if (numero == 0 || null) {
    alert('El número ingresado es cero');
  } else {
    document.write(`El ${numero} es negativo`);
  }
}
escalaNumero();*/

// 10. Leer un número, mostrar si es par o impar.
/*function parImpar() {
  const numero = prompt("Ingrese un número");
  if (numero % 2 === 0) {
    document.write(`El ${numero} es par`);
  } else {
    document.write(`El ${numero} es impar`);
  }
}
parImpar();*/

// 11. Leer dos números, mostrar el mayor.
/*function numeroMayor() {
  const numero1 = prompt("Ingrese un número");
  const numero2 = prompt("Ingrese un número");
  if (Number(numero1) > Number(numero2)) {
    document.write(`El ${numero1} es mayor que ${numero2}`);
  } else if (Number(numero2) > Number(numero1)) {
    document.write(`El ${numero2} es mayor que ${numero1}`);
  } else {
    document.write("El numero es igual o cero");
  }
}
numeroMayor();*/

// 12. Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).

/*function operacionesBasicas() {
  const numero1 = prompt("Ingrese un número");
  const numero2 = prompt("Ingrese un número");
  let suma = Number(numero1) + Number(numero2);
  document.write(`El resultado de la suma es ${suma}`);

  let resta = Number(numero1) - Number(numero2);
  document.write(`El resultado de la resta es ${resta}`);

  let multiplicacion = Number(numero1) * Number(numero2);
  document.write(`El resultado de la multiplicación es ${multiplicacion}`);

  let division = Number(numero1) / Number(numero2);
  document.write(`El resultado de la división es ${division}`);

  let modulo = Number(numero1) % Number(numero2);
  document.write(`El resultado del modulo es ${modulo}`);

  let cuadrado = Number(numero1) ** Number(numero2);
  document.write(`El resultado del cuadrado es ${cuadrado}`);
}
operacionesBasicas();*/

// 13. Leer dos números, mostrar la suma dividido en la resta.

/*function numeroOperaciones() {
  const numero1 = prompt("Ingrese un numero");
  const numero2 = prompt("Ingrese un numero");
  let suma = Number(numero1) + Number(numero2);
  document.write(`El resultado de la suma es ${suma}`);
  let resta = Number(numero1) - Number(numero2);
  document.write(`El resultado de la resta es ${resta}`);
  let division = suma / resta;
  document.write(`El resultado de la división es ${division}`);
}
numeroOperaciones();*/
