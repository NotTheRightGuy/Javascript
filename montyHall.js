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
let iteration = 1000;

for (let i = 0; i < iteration; i++) {
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

let wSdiv = document.getElementById("winningSwitchingNumbers");
let wdiv = document.getElementById("winningWithoutSwitchingNumbers");
let ldiv = document.getElementById("losingNumbers");
let iterationDiv = document.getElementById("iteration");

let bar1 = document.getElementById("bar-1");
let bar2 = document.getElementById("bar-2");
let bar3 = document.getElementById("bar-3");

wSdiv.innerHTML = `${(winningSwitched / iteration).toFixed(4) * 100}%`;
wdiv.innerHTML = `${(winningNotSwitch / iteration).toFixed(4) * 100}%`;
ldiv.innerHTML = `${(losing / iteration).toFixed(4) * 100}%`;

bar1.style.cssText = `background-color: lightcoral;
  width: 20px;
  margin-left: 48%;
  height : ${(winningSwitched / iteration) * 500}px`;

bar2.style.cssText = `background-color: lightgreen;
  width: 20px;
  margin-left: 48%;
  height : ${(winningNotSwitch / iteration) * 500}px`;

bar3.style.cssText = `background-color: lightblue;
  width: 20px;
  margin-left: 48%;
  height : ${(losing / iteration) * 500}px`;

iterationDiv.innerHTML = `Amount of Iteration = ${iteration}`;
