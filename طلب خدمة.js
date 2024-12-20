const fname = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sub(){
    

    let nameValue = fname.value
    let emailValue = email.value
    let messageValue = message.value

    if(nameValue === '' | emailValue === '' | messageValue === ''){
        alert('كل الحقول مطلوبة')
    }
    else if(!validateEmail(emailValue)){
        alert('البريد الألكتروني غير صحيح')
    }else{
        alert('تمر أرسال الرسالة بنجاح')
        fname.value = ''
        email.value = ''
        message.value = ''
    }



}


