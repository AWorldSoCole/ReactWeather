// var names = ['Artis', 'Marlon', 'Jen'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// })

// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('arrowFunc', name);
//   var x = 'something';  
// })

// names.forEach((name) => console.log('Short', name))

// var returnMe = (name) => name + '!';

// console.log(returnMe('Artis'));

// var person = {
//   name: 'Artis',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' say hi to ' + name);
//     })
//   }
// }

// person.greet();

function add (a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;

console.log(addStatement(1, 3));
console.log(addExpression(9, 0));