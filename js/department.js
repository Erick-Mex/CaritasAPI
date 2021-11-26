let forms = document.querySelectorAll('.formDepartment');
let optionButton = document.querySelector('.options').children;

//Mostrar el formulario correspondiente para los departamentos
function showForms(id) {
    for(var i = 0; i < 2; i++) {
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