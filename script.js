function buttonToggler(){
  menu.classList.toggle("active");
}


const toggleButton =  document.querySelector(".toggler");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", ()=>{
  buttonToggler();
})