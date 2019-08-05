const dropdown = document.querySelector(".services");
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const secondMenu = document.querySelector('.menu2');
const milestone = document.querySelector('.milestone');
const drop = document.querySelector('.dropchild');
const dropin = document.querySelector('.closeb');

function display () {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        this.classList.add('trigger-enter-active');
    }, 150)
}

function noDisplay () {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
}

function showOverlay() {
    document.querySelector('.overlay').style.transition = 'all 500ms ease-in-out';
    document.querySelector('.overlay').style.transform = 'scaleY(1)';
    document.querySelector('.overlay').style.transformOrigin = 'top';
}

function removeOverlay() {
    document.querySelector('.overlay').style.transform = 'scaleY(0)';
}

function show() {
    // document.querySelector('.dropchild').style.display = 'flex';
    // let drop = document.querySelector('.milestonelink');
    // drop.style.transition = 'all 500ms ease-in-out';
    // drop.style.transform = 'scaleY(1)';
    // drop.style.transformOrigin = 'top';
    // document.querySelector('.milestone').style.fontSize = '1em';
    // console.log('shit!');
    // var show = document.querySelector('.drop');
    show.style.fontSize = '1em';
}



dropdown.addEventListener("mouseenter", display);
dropdown.addEventListener("mouseleave", noDisplay);
menu.addEventListener("click", showOverlay);
secondMenu.addEventListener("click", removeOverlay);
milestone.addEventListener("click", show);

