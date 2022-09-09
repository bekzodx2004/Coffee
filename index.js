yopiq1 = true;
yopiq2 = true;
yopiq3 = true;
yopiq4 = true;
yopiq5 = true;
body = document.querySelectorAll(".dropdown__body");
aylan = document.querySelectorAll("#aylan");

function ochil1() {
  if (yopiq1) {
    body[0].classList.add("ochiq");
    aylan[0].classList.add("aylan");
    yopiq1 = false;
  } else {
    body[0].classList.remove("ochiq");
    aylan[0].classList.remove("aylan");
    yopiq1 = true;
  }
}

function ochil2() {
  if (yopiq2) {
    body[1].classList.add("ochiq");
    aylan[1].classList.add("aylan");
    yopiq2 = false;
  } else {
    body[1].classList.remove("ochiq");
    aylan[1].classList.remove("aylan");
    yopiq2 = true;
  }
}

function ochil3() {
  if (yopiq3) {
    body[2].classList.add("ochiq");
    aylan[2].classList.add("aylan");
    yopiq3 = false;
  } else {
    body[2].classList.remove("ochiq");
    aylan[2].classList.remove("aylan");
    yopiq3 = true;
  }
}

function ochil4() {
  if (yopiq4) {
    body[3].classList.add("ochiq");
    aylan[3].classList.add("aylan");
    yopiq4 = false;
  } else {
    body[3].classList.remove("ochiq");
    aylan[3].classList.remove("aylan");
    yopiq4 = true;
  }
}

function ochil5() {
  if (yopiq5) {
    body[4].classList.add("ochiq");
    aylan[4].classList.add("aylan");
    yopiq5 = false;
  } else {
    body[4].classList.remove("ochiq");
    aylan[4].classList.remove("aylan");
    yopiq5 = true;
  }
}
