let technicalBtnEl = document.getElementById("btn1");
let nonTechnicalBtn = document.getElementById("btn2");
let flagshipBtnEl = document.getElementById("btn3");

let technicalEventTabEl = document.getElementById("technicalEvent");
let nonTechnicalEventTabEl = document.getElementById("nonTechnicalEvent");
let flagshipEventTabEl = document.getElementById("flagshipEvent");

let item1=document.getElementById("item1");
let item2=document.getElementById("item2");
let item3=document.getElementById("item3");

let navItem1=document.getElementById("nav-item1");
let navItem2=document.getElementById("nav-item2");
let navItem3=document.getElementById("nav-item3");

item2.classList.remove("item");
item3.classList.remove("item");

navItem2.classList.remove("nav-item");
navItem3.classList.remove("nav-item");

nonTechnicalEventTabEl.classList.add("d-none");
flagshipEventTabEl.classList.add("d-none");

function technicalTab() {
    technicalEventTabEl.classList.remove("d-none");
    nonTechnicalEventTabEl.classList.add("d-none");
    flagshipEventTabEl.classList.add("d-none");

    technicalBtnEl.classList.add("selected-button");
    nonTechnicalBtn.classList.remove("selected-button");
    flagshipBtnEl.classList.remove("selected-button");

    item1.classList.add("item");
    item2.classList.remove("item");
    item3.classList.remove("item");
    
    navItem1.classList.add("nav-item");
    navItem2.classList.remove("nav-item");
    navItem3.classList.remove("nav-item");
}




function nonTechnicalTab() {
    technicalEventTabEl.classList.add("d-none");
    nonTechnicalEventTabEl.classList.remove("d-none");
    flagshipEventTabEl.classList.add("d-none");

    technicalBtnEl.classList.remove("selected-button");
    nonTechnicalBtn.classList.add("selected-button");
    flagshipBtnEl.classList.remove("selected-button");

    item1.classList.remove("item");
    item2.classList.add("item");
    item3.classList.remove("item");

    navItem1.classList.remove("nav-item");
    navItem2.classList.add("nav-item");
    navItem3.classList.remove("nav-item");
}



function flagshipTab() {
    technicalEventTabEl.classList.add("d-none");
    nonTechnicalEventTabEl.classList.add("d-none");
    flagshipEventTabEl.classList.remove("d-none");

    technicalBtnEl.classList.remove("selected-button");
    nonTechnicalBtn.classList.remove("selected-button");
    flagshipBtnEl.classList.add("selected-button");

    item1.classList.remove("item");
    item2.classList.remove("item");
    item3.classList.add("item");

    navItem1.classList.remove("nav-item");
    navItem2.classList.remove("nav-item");
    navItem3.classList.add("nav-item");
}