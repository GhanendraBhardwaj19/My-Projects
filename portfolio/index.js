let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");
function closemenu() {
  sidemenu.style.right = "-200px";
}
function showmenu() {
  sidemenu.style.right = "0";
}

let nav = document.getElementsByClassName("nav-link");
let navlinks = Array.from(nav);
console.log(navlinks);

function active_ink() {
  // for (link of nav) {
  //   console.log(link.classList);
  // }
  navlinks.forEach((navlink) => {
    navlink.classList.remove("active-link");
  });
  event.currentTarget.classList.add("active-link");
}
