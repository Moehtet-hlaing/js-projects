const bodyEl = document.querySelector("body");

const eyeball = (event) => {
  var eye = document.querySelectorAll(".eye");
  eye.forEach(function eye(eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (radian * ( 180 / Math.PI) * -1) + 270;
    eye.style.transform = "rotate(" + rot + "deg)";
  });
};
bodyEl.addEventListener("mousemove", eyeball);
