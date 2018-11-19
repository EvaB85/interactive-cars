console.log('Let\'s get our race on!')

let redCar = document.getElementsByClassName('car--red')[0];
let blueCar = document.getElementsByClassName('car--blue')[0];
// let car = document.getElementsByClassName('car');

let carGo = function(e) {
  if (e.key === 'd') {  // red car
    e.preventDefault();

  } else if (e.key === 'k') {  // blue car
    e.preventDefault();
  }
}

window.addEventListener('keyup', function(e) {
  carGo(e);
});
