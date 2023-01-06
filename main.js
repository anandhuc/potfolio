danger.style.display = 'none';
success.style.display = 'none';
emailno.style.display = 'none';
nameno.style.display = 'none';
function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    const emailno = document.getElementById('emailno');
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let rege = /^([\.a-zA-Z]){2,20}$/;
    let s = email.value;
    let n = Name.value;
    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
      else if(regex.test(s) && rege.test(n)){
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 500);

        success.style.display = 'block';
        
    } else

    { if(regex.test(s) == false){
        emailno.style.display = 'block';
    }
        if(rege.test(n) == false){
        nameno.style.display = 'block';
        }
    }     
    


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
        emailno.style.display = 'none';
        nameno.style.display = 'none';
    }, 2000);

}