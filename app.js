const contactForm = document.querySelector("form");
let username = document.getElementById('username');
let email = document.getElementById('emailid');
let address = document.getElementById('address');
let areacode = document.getElementById('areacode');
let telnumber = document.getElementById('telnum');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formdata = {
        name : username.value,
        email : email.value,
        address: address.value,
        contact: areacode.value + " " + telnumber.value,
        message: message.value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent successfully');
            username.value = '';
            email.value = '';
            address.value = '';
            areacode.value = '';
            telnumber.value = '';
            message.value = '';
        }

        else{
            alert('Something went wrong');
        }
    }

    xhr.send(JSON.stringify(formdata));

});