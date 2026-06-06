const themeToggle =
document.getElementById("themeToggle");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

document.body.classList.add("dark");

themeToggle.textContent =
"☀️ Light Mode";

}

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeToggle.textContent =
"☀️ Light Mode";

}else{

localStorage.setItem("theme","light");

themeToggle.textContent =
"🌙 Dark Mode";

}

});

window.addEventListener("scroll",()=>{

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop/scrollHeight)*100;

document.getElementById("progressBar")
.style.width = progress + "%";

});

document.querySelector(".bookmark-btn")
.addEventListener("click",()=>{

alert("Article bookmarked successfully!");

});