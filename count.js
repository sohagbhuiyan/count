const add = document.getElementById('add');
const add1 = document.getElementById('demo');

add.addEventListener('click', () => {
  add1.innerHTML = adda();
})

const adda = function () {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
  }
}();


// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//      return counter;
//     }
// })();

// function myFunction(){
//   document.getElementById("demo").innerHTML = add();
// }
