let forms = document.querySelectorAll('.formDepartment');
let optionButton = document.querySelector('.options').children;


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


/* let file = document.getElementById('inputFile');

file.addEventListener('change', function() {
    let fr = new FileReader();
    fr.onload = function() {
        const word = fr.result.split(',')
        word.forEach(element => {
            let algo = element.split('\r\n')
            console.log(algo);
        });
        console.log(word);
        document.getElementById('output').textContent = fr.result;
    }
    fr.readAsText(this.files[0]);
}) */