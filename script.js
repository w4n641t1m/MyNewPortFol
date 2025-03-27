const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbwP3b0bC6GWoEQqvINJzF9HLMRSwxqT-asqHFofL1KNe9Nv0y4N4NhZO_LqvhmJw9HV6Q/exec'
const form1 = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form1)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
});


var loader = document.getElementById("preloader");

window.addEventListener("load", function()
{
    loader.style.display = "none";
});
