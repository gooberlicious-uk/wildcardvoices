(function(){
var nav=document.getElementById('nav'),btn=document.querySelector('.menu');
btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
})();
(function(){
document.querySelectorAll('.car').forEach(function(c){
var s=c.querySelectorAll('figure'),ctl=c.querySelector('.car-ctl'),n=c.querySelector('.car-count'),i=0;
function show(k){i=(k+s.length)%s.length;s.forEach(function(f,j){f.hidden=(j!==i);});n.textContent=(i+1)+' / '+s.length;}
if(s.length>1){ctl.hidden=false;
c.querySelector('.car-prev').addEventListener('click',function(){show(i-1);});
c.querySelector('.car-next').addEventListener('click',function(){show(i+1);});}
show(0);
});
})();
(function(){
var f=document.querySelector('.cform');if(!f)return;
var r=f.querySelector('[name=redirect]'),s=f.querySelector('[name=subject]'),t=f.querySelector('[name=topic]'),b=f.querySelector('button[type=submit]'),bt=b.textContent;
// Web3Forms needs an absolute redirect on the same domain, so point it at the thanks page wherever the site is served from
if(/^https?:$/.test(location.protocol))r.value=new URL('thanks',location.href).href;
f.addEventListener('submit',function(){if(t.value)s.value='New enquiry: '+t.value;b.disabled=true;b.textContent='Sending…';});
window.addEventListener('pageshow',function(){b.disabled=false;b.textContent=bt;});
})();
