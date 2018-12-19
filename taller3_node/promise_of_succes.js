et sayHello = function(name) {
  console.log("hello" + name);
};

let saludo = function(nombre, callback) {
  //calback es el espacio para
  return callback(nombre);
};

console.log(saludo("juanito", sayHello));

//callback que sume dos numeros

let suma = function(a, b) {
  return a + b;
};
let calc = function(num1, num2, callback) {
  //calback es el espacio para
  return callback(num1, num2);
};

console.log(calc(2, 3, suma));
