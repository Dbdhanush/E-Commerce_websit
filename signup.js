const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


form.addEventListener('submit', e =>{
    e.preventDefault();
    checkInput();
   
})
function checkInput(){
const nameValue=username.value.trim();
const emailValue=email.value.trim();
const passwordValue=password.value.trim();
const password2Value=password2.value.trim();


if(nameValue==='')
{
    setError(username,'Username cannot be empty');
}
else{
    setSuccess(username);
}


if(emailValue==='')
{
    setError(email, 'Email cannot be blank');
}
else if(!isEmail(emailValue))
{
    setError(email,'Not a valid Email!!');
}
else
{
    setSuccess(email);
}
function isEmail(email)
{
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        
}

if(passwordValue==='')
{
    setError(password,'password cannot be empty');
}
else if(passwordValue.length<8)
{
    setError(password,'password must be atleast 8 Charecters');
}
else{
    setSuccess(password);
}

if(password2Value==='')
{
    setError(password2,'password cannot be empty');
}
else if(passwordValue !== password2Value)
{
setError(password2, 'Password mismatching !!')
}
else{
    setSuccess(password2);
}
}


function setError(input,message)
{
const formControl=input.parentElement;
const error=formControl.querySelector('small');
formControl.className='input-control error';
error.innerText=message;
}
function setSuccess(input)
{
const formControl=input.parentElement;
formControl.className='input-control success';
window.location.assign('login.html');

}





