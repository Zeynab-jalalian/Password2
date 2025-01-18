let pass1=document.querySelector('#pass_1');
let pass2=document.querySelector('#pass_2');
let button=document.querySelector('button');
let showBtn=document.querySelector('.show');
let errorText=document.querySelector('.error-text');

function active(){
    if(pass1.value.length>=6){
        button.removeAttribute('disabled','');
        pass2.removeAttribute('disabled','');
        button.classList.add('active');
    }else{
        button.setAttribute('disabled','');
        pass2.setAttribute('disabled','');
        button.classList.remove('active');
    }
}
function active_2(){
    if(pass2 !== ""){
     showBtn.style.display="block";
     showBtn.onclick=function(){
        if((pass1.type==="password") && (pass2.type="password")){
            showBtn.innerHTML="مخفی";
            pass1.type="text";
            pass2.type="text";
        }else{
            showBtn.innerHTML="نمایش";
            pass1.type="password";
            pass2.type="password";
        }
     }
    }
}