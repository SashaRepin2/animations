"use strict";

const arrFaces = document.querySelectorAll(".rubikCube div");
let currentFaceId = 0;
let currentMode = "angle";

let rotateX = 0,
  rotateY = 0;

let cursorPosX = 0,
  cursorPosY = 0;

let view = 2000;

// Display current info
displayInfoInTable();

window.addEventListener(
  "mousemove",
  (e) => {
    if (cursorPosX < e.pageX - 2) {
      rotateY += 2;
    } else if (cursorPosX > e.pageX + 2) {
      rotateY -= 2;
    }

    if (cursorPosY < e.pageY - 2) {
      rotateX += 2;
    } else if (cursorPosY > e.pageY + 2) {
      rotateX -= 2;
    }

    cursorPosX = e.pageX;
    cursorPosY = e.pageY;

    document.querySelector(
      ".rubikCube"
    ).style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  },
  false
);

document.onkeydown = (e) => {
  console.log(e.code);
  switch (e.code) {
    case "KeyD":
      changeTransform(arrFaces[currentFaceId], 5);
      break;
    case "KeyA":
      changeTransform(arrFaces[currentFaceId], -5);
      break;
    case "Space":
      changeCurrentFaceID();
      break;
    case "ShiftLeft":
      currentMode === "angle"
        ? (currentMode = "position")
        : (currentMode = "angle");
      displayInfoInTable();
      break;
    default:
      break;
  }
};

// Change current face of cube
function changeCurrentFaceID() {
  const v = 1;
  if (currentFaceId >= arrFaces.length - 1) {
    currentFaceId = 0;
  } else {
    currentFaceId++;
  }
  displayInfoInTable();
}

function changeTransform(faceCube, value) {
  let oldValueRotate = parseInt(
    /\-?\d*deg\s*\)/g.exec(faceCube.style.transform)
  );
  let oldValueTranslate = parseInt(
    /\-?\d*px\s*\)/g.exec(faceCube.style.transform)
  );
  let oldAxes = /rotate3d\((\d,\s){3}/g
    .exec(faceCube.style.transform)[0]
    .split("(")[1];

  if (currentMode === "angle") {
    faceCube.style.transform = `translate3d(0, 0, ${oldValueTranslate}px) rotate3d(${oldAxes} ${
      oldValueRotate - value
    }deg)`;
  } else if (currentMode === "position") {
    faceCube.style.transform = `translate3d(0, 0,  ${
      oldValueTranslate - value
    }px) rotate3d(${oldAxes} ${oldValueRotate}deg)`;
  }
}

// function getTransformValues(transformStyle){

// 	return
// }

function displayInfoInTable() {
  document
    .getElementById("current-face-id")
    .getElementsByTagName("span")[0].textContent = currentFaceId;
  document
    .getElementById("current-face-color")
    .getElementsByTagName("span")[0].textContent =
    arrFaces[currentFaceId].className.split("-")[1];
  document
    .getElementById("current-mode")
    .getElementsByTagName("span")[0].textContent = currentMode;
}
