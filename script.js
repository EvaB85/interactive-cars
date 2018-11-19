console.log('Let\'s get our race on!')

let redCar = document.getElementsByClassName('car--red')[0];
let blueCar = document.getElementsByClassName('car--blue')[0];
// let car = document.getElementsByClassName('car');
//getElementsByClassName returns an array
let redMoveX = 0;
let blueMoveX = 0;

let carGo = function(e) {
  if (e.key === 'd') {  // red car
    e.preventDefault();
    redMoveX += 35;
    // redMoveX = redMoveX + 10;
    redCar.style.transform = `translateX(${redMoveX}px)`;
    // redCar.style.transform = 'translateX(' + redMoveX + 'px)';
  } else if (e.key === 'k') {  // blue car
    e.preventDefault();
    blueMoveX += 35;
    blueCar.style.transform = `translate(${blueMoveX}px)`;
  }
}

window.addEventListener('keyup', function(e) {
  carGo(e);
});
