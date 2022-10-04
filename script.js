// selections
let allRead = document.getElementById('allRead');
let readNum = document.getElementById('NUM');
let active = document.querySelectorAll('.active');

allRead.onclick = () =>{
    active.forEach((e) => e.classList.remove("active"))
    readNum.textContent = '0';
}