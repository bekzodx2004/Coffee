yopiq = true;
body = document.querySelectorAll(".dropdown__body");
aylan = document.querySelectorAll("#aylan");

function ochil1() {
  if (yopiq) {
    body[0].style =
      " display :flex ; transform: translateY(0px);  transition: all 2s";
    aylan[0].style = "transform : rotate(180deg) ; transition: all 1s ";
    yopiq = false;
  } else {
    body[0].style = null;
    aylan[0].style = "transform : rotate(0deg) ; transition: all 1s ";

    yopiq = true;
  }
}

function ochil2() {
  if (yopiq) {
    body[1].style =
      "transform: translateY(0px); display :flex ; transition: all 2s ";
    aylan[1].style = "transform : rotate(180deg) ; transition: all 1s ";
    yopiq = false;
  } else {
    body[1].style = null;
    aylan[1].style = "transform : rotate(0deg) ; transition: all 1s ";

    yopiq = true;
  }
}

function ochil3() {
  if (yopiq) {
    body[2].style =
      "transform: translateY(0px); display :flex ; transition: all 2s ";
    aylan[2].style = "transform : rotate(180deg) ; transition: all 1s ";
    yopiq = false;
  } else {
    body[2].style = null;
    aylan[2].style = "transform : rotate(0deg) ; transition: all 1s ";

    yopiq = true;
  }
}

function ochil4() {
  if (yopiq) {
    body[3].style =
      "transform: translateY(0px); display :flex ; transition: all 2s ";
    aylan[3].style = "transform : rotate(180deg) ; transition: all 1s ";
    yopiq = false;
  } else {
    body[3].style = null;
    aylan[3].style = "transform : rotate(0deg) ; transition: all 1s ";

    yopiq = true;
  }
}

function ochil5() {
  if (yopiq) {
    body[4].style =
      "transform: translateY(0px); display :flex ; transition: all 2s ";
    aylan[4].style = "transform : rotate(180deg) ; transition: all 1s ";
    yopiq = false;
  } else {
    body[4].style = null;
    aylan[4].style = "transform : rotate(0deg) ; transition: all 1s ";

    yopiq = true;
  }
}
