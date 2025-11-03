
document.getElementById("searchBox").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let books = document.querySelectorAll("#bookList li");

  books.forEach(i => {
    let text = i.textContent.toLowerCase();
    i.style.display = text.includes(filter) ? "block" : "none";
  });
});
//


const galleryItems = document.querySelectorAll('.galleryItem img');
const lightBox = document.getElementById('lightBox');
const lightBoxImg = document.getElementById('lightBoxCon');
const caption = document.getElementById('caption');
const close = document.getElementById('close');

galleryItems.forEach(item => {
  item.addEventListener('click', ()=>{

    lightBox.style.display = 'flex';
    lightBoxImg.src = item.src;
    caption.innerText = item.alt;
  })

  close.addEventListener('click', (e)=>{
    lightBox.style.display ='none';
  })

  lightBox.addEventListener('click', (e)=>{
    if(e.target !== lightBoxImg && e.target !== caption){
      lightBox.style.display = 'none';
    }
  })
});
//

// Accordion
document.querySelectorAll(".accordion-btn").forEach((btn) => { 
  btn.addEventListener("click", function() {
    btn.classList.toggle("active");
    let content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

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


/*
CODE ATTRIBUTION
Author: O Tech School
Title: Creating a Lightbox Gallery with HTML, CSS & JavaScript #75DayUIChallenge #day69
Date Published:2024
Link/Accessed at:https://www.youtube.com/watch?v=OspQQSjFL1A
Date accessed:03/11/2025
*/ 




