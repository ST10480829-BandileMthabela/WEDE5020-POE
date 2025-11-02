/*galley*/
let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');

btnNext.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.switch-item').appendChild(items[0])
})

btnPrev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.switch-item').prepend(items[items.length-1])
})
/**/ 

/*light-box */

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".imglight img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    original.src = preview.src;
    caption.textContent = preview.alt;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
