let form = document.querySelector('.contact-form');
let responseMessage = document.querySelector('.contact-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let message = {
        name: form[0].value,
        email: form[1].value,
        message: form[2].value
    };

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                form[0].value = "";
                form[1].value = "";
                form[2].value = "";

                responseMessage.innerHTML = JSON.parse(xhr.responseText).message;
            } else {
                responseMessage.innerHTML = "Something went wrong, sorry!";
            }
        }
    };

    xhr.open('POST', 'http://localhost:3000/contact', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(message));

});