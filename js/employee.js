let forms = document.querySelectorAll('.formEmployee');
let optionButton = document.querySelector('.options').children;

//Mostrar formulario para los empleados
function showForms(id) {
    for(var i = 0; i < 4; i++) {
        if(i != id)
        {
            forms[i].style.display = "none"
            optionButton[i].classList.remove("active");
        } else {
            forms[i].style.display = "block"
            optionButton[i].classList.add("active");
        }
    }
}