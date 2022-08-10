var inputs = document.querySelectorAll("input, textarea");
var btnSubmit = document.getElementById("submit");
var msgInput = document.getElementById('msgInput');


btnSubmit.addEventListener('click', function() {
    inputs.forEach(function (e){
        if(e.value == "") {
            event.preventDefault()
            msgInput.innerHTML = '<p class= "msgInput"> Preencha os campos por favor! </p>';
        }
    })
}) 
