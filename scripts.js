const btn = document.querySelector("button");
function greet(event) {
    alert( " Greet from button " );
}
btn.onclick = greet;

/* for all buttons with querySelectorAll */
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', greet);
});


