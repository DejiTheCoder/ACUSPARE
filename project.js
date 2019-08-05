const maintarget = document.querySelector(".pastprojects");
const board = document.querySelector("#board");
const closeBtn = document.querySelector('.cancel');

maintarget.addEventListener('click', function displayProjects() {
    maintarget.classList.add("show");
    board.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    board.style.display = 'none';
})