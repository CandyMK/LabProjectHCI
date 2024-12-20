document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();

    let firstnamefield = document.getElementById('firstName')
    let lastnamefield = document.getElementById('lastName')
    let emailfield = document.getElementById('email')
    let phonefield = document.getElementById('phoneNumber')
    let messagefield = document.getElementById('message')

    let firstName = firstnamefield.value
    let lastName = lastnamefield.value
    let email = emailfield.value
    let phoneNumber = phonefield.value
    let message= messagefield.value

    if(firstName === ''){
        alert('first name cannot be empty')
        return;
    }

    if(lastName === ''){
        alert('last name cannot be empty')
        return;
    }

    if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
        alert('email is not valid')
        return;
    }

    if(!validatePhoneNumber(phoneNumber)){
        alert('phone number is not valid')
        return;
    }

   
    if (message === '' || countWords(message) > 150){
        alert('message is not valid')
        return;
    }

    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
})

function validatePhoneNumber(phoneNumber){
    if(phoneNumber.length < 10 || phoneNumber.length > 12){
        return false;
    }

    for(let i = 0; i < phoneNumber.length; i++){
        if(phoneNumber[i] < '0' || phoneNumber[i] > '9'){
            return false;
        }
    }
    return true;
}

function countWords(str) {
    return str.split(/\s+/).filter(word => word !== '').length;
}