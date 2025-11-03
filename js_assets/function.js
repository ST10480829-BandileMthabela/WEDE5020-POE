// Search & Filtering
document.getElementById("searchBox").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let books = document.querySelectorAll("#bookList li");

  books.forEach(i => {
    let text = i.textContent.toLowerCase();
    i.style.display = text.includes(filter) ? "block" : "none";
  });
});
//

// Lightbox functionality
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
document.querySelectorAll(".accordion-btn").forEach((btn) => { //Selects all elements with class accordion-btn.

  /*Loops through each button and adds a click listener.
On click: Toggles the class "active" (you can use this in CSS for styling open/closed buttons).
 */
  btn.addEventListener("click", function() {
    btn.classList.toggle("active");

    /* Selects the next element (nextElementSibling) which is the accordion content.
Checks if it’s visible:
If display is "block", hide it ("none")
If hidden, show it ("block") */
    let content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});




