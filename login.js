//login validation
const form1=document.getElementById('form1');
const emailid=document.getElementById('emailid');
const loginpass=document.getElementById('loginpass');

form1.addEventListener('submit', e =>{
    e.preventDefault();
    checkInput();
   
})
function checkInput()
{
    const emailidValue=emailid.value.trim();
    const loginpassValue=loginpass.value.trim();
if(emailidValue === '')
{
    setError(emailid, 'Email id cannot be Empty')
}

else{
    setSuccess(emailid);
}
if(loginpassValue === '')
{
    setError(loginpass, 'Password cannot be empty');
}
else
{
setSuccess(loginpass);
}
}

//login form function
function setError(input,message)
{
    const formcontrol=input.parentElement;
    const error=formcontrol.querySelector('small');
    formcontrol.className='login-control error';
    error.innerText=message;
}
function setSuccess(input)
{
const formcontrol=input.parentElement;
formcontrol.className='login-control success';
window.location.assign('index.html');

}