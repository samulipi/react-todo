// function add(a, b){
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5, 1];
//
// console.log( add(...toAdd));

// var groupA = ['Saara', 'Kerttu'];
// var groupB = ['Paula', 'Susanna'];
// var final = [...groupB, ...groupA];
//
// console.log(final);

var person = ['Ilkka', 38];
var personTwo = ['Saara', 2];

function greet(nimi, age) {
  console.log('hello ' + nimi + " olet " + age );
}
greet(...person);
greet(...personTwo);

 var names = ['Saara', 'Kerttu'];
 var final = ['Ilkka', ...names];

 function greet2(name) {
   console.log('hello ' + name  )
 }

final.forEach( greet2 );
