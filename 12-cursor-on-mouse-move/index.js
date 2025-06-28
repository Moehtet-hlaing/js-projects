document.addEventListener("mousemove", function (e) {
  const pointer = document.querySelector(".pointer");
  pointer.style.left = e.pageX + "px";
  pointer.style.top = e.pageY + "px";
});
