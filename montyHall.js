function chooseDoor() {
  return Math.floor(Math.random() * 3);
}

function choosePrize() {
  return Math.floor(Math.random() * 3);
}

function switchDoors() {
  return Math.random() > 0.5 ? true : false;
}

function doorToOpen(doorChoosen, prizechoosen) {
  let doors = [0, 1, 2];
  if (doorChoosen != prizechoosen) {
    doors.splice(doors.indexOf(doorChoosen), 1);
    doors.splice(doors.indexOf(prizechoosen), 1);
    return doors[0];
  } else {
    doors.splice(doors.indexOf(doorChoosen), 1);
    return doors[Math.floor(Math.random() * 2)];
  }
}

let winningSwitched = 0;
let winningNotSwitch = 0;
let losing = 0;

for (let i = 0; i < 100; i++) {
  let doorIchoose = chooseDoor();
  let prizeAt = choosePrize();
  let doorOpened = doorToOpen(doorIchoose, prizeAt);
  let switched = switchDoors();
  if (switched) {
    doorIchoose = 3 - (doorOpened + doorIchoose);
  }
  if (doorIchoose == prizeAt) {
    if (switched) {
      winningSwitched++;
    } else {
      winningNotSwitch++;
    }
  } else {
    losing++;
  }
}

console.log(
  `Amount of times you win by Switching : ${winningSwitched}\nAmount of times you win without switching : ${winningNotSwitch}\nAmount of time you lost : ${losing}`
);
