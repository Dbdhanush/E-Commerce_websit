const toggler = document.getElementById('sun');
const body = document.querySelector('body');

toggler.addEventListener('click', function(){
this.classList.toggler('fa-moon');
if(this.classList.toggler('fa-sun'))
{
body.style.backgroundColor = 'white';
body.style.color = 'black';
body.style.transition = '1s' ;   
}
else{
        body.style.backgroundColor = 'black';
body.style.color = 'white';
body.style.transition = '1s' ;
    }
}
)