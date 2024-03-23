var menubutton = document.querySelector('.menubutton');

var dropdown = document.querySelector('.mid-nav');

menubutton.addEventListener("click", () => {
    dropdown.classList.toggle('dropdown');
})