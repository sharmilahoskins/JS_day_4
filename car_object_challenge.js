//Story 1
function createCar(newMake, newYear, newColor) {
  return {
    make: newMake,
    year: newYear,
    color: newColor,
    getInfo: function(){return this.make + " " + this.year + " " + this.color}
  }
}

//Story 2
function createCar(newMake, newYear, newColor) {
  let speed = 20
  return {
    make: newMake,
    year: newYear,
    color: newColor,
    getInfo: function(){return this.make + " " + this.year + " " + this.color},
    getSpeed: function(){return speed},
    accelerate: function(){speed += 10},
    brake: function(){speed -= 7}
  }
}

//Story 3
function createCar(newMake, newYear, newColor) {
  let speed = 20
  return {
    make: newMake,
    year: newYear,
    color: newColor,
    getInfo: function(){return this.make + " " + this.year + " " + this.color},
    getSpeed: function(){return speed},
    accelerate: function(){
      while(speed < 50){
      speed += 10}
    },
    brake: function(){
      while(speed > 0){
      speed -= 7}
      if (speed < 0){
        speed = 0
      }
    }
  }
}

function createCar(newMake, newYear, newColor) {
  let speed = 20
  let maxSpeed = 85
  return {
    make: newMake,
    year: newYear,
    color: newColor,
    getInfo: function(){return this.make + " " + this.year + " " + this.color},
    getSpeed: function(){ return speed },
    accelerate: function(){
      speed += 10
      if (speed > 85) {
        speed = maxSpeed
      }
    },
    brake: function(){ speed -= 7 }
  }
}


function accelTo70(input) {
  var car = createCar(input)
  var speed = car.getSpeed()
  while (speed < 70) {
  car.accelerate()
  }
}

let newCar = createCar("Honda", "1991", "Blue")

while (newCar.getSpeed() < 70) {
  newCar.accelerate()
}
while (newCar.getSpeed() > 0) {
  newCar.brake()
  if (newCar.getSpeed() < 0){
    newCar.getSpeed() = 0}
}

//Story 4
let newCar = createCar("Honda", "1991", "Blue")

while (newCar1.getSpeed() < 85) {
  newCar1.accelerate()
  if (newCar1.getSpeed() > 85){
      console.log(newCar1.getSpeed())
    }
  }
//Story 5
function createCar(newMake, newYear, newColor) {
  let speed = 20
  let maxSpeed = 85
  return {
    make: newMake,
    year: newYear,
    color: newColor,
    getInfo: function(){return this.make + " " + this.year + " " + this.color},
    getSpeed: function(){ return speed },
    accelerate: function(){
      speed += 10
      if (speed > 85) {
        speed = maxSpeed
      }
    },
    brake: function(){
       speed -= (Math.random() * speed) / 2; 
     }
  }
}
