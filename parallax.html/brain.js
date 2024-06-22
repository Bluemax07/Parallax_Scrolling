console.log("hello");
let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let moutains_behind=document.getElementById('mb');
let text = document.getElementById('text');
let btn=document.getElementById('btn');
let moutain_front=document.getElementById('mf');
let header = document.querySelector('header')
window.addEventListener(`scroll`,function(){
    let value=window.scrollY;
    
    stars.style.left=value +0.25+'px';
    
    moon.style.top=value+1.05+'px';
    moutains_behind.style.top=value+0.5+'px';
    text.style.marginRight= value + 8 + 'px';
     text.style.marginTop= value+1.25+'px';   
    btn.style.marginTop= value+1.5+'px';
    header.style.top=value+0.05+'px';
    moutain_front.style.top=value+0+'px';
  
    
     
   

})