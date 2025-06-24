const imageContainerEl = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imgNum = 10;
  addNewImages();
});

function addNewImages() {
  for (i = 0; i < imgNum; i++) {
    const imgEl = document.createElement("img");
    imgEl.src = `https://picsum.photos/300/300?random=${Math.floor(
      Math.random() * 1000
    )}`;
    imageContainerEl.appendChild(imgEl);
  }
}
