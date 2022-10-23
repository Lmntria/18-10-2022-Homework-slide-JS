
let count=1
slide(count)
let zero=0
autoslide()

function slide(x) {
  let slides=document.getElementsByClassName("big")
  let littles=document.getElementsByClassName("little")
  if (x > slides.length) {count = 1}
  if (x < 1) {count = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (const little of littles) {
    little.className=little.className.replace("active","")
  }
  slides[count-1].style.display = "inline-block";
  littles[count-1].className += " active";
  
}

function plusSlides(h) {
  slide(count += h)
}
function current(h) {
  slide(count = h)
}

function autoslide() {
  let slides=document.getElementsByClassName("big")
  let littles=document.getElementsByClassName("little")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (const little of littles) {
    little.className=little.className.replace("active","")
  }
  zero++
  if (zero > slides.length) {zero = 1}
  if(zero)
  slides[zero-1].style.display = "inline-block";
  littles[zero-1].className += " active";
  setTimeout(autoslide,3000)
}