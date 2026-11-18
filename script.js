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
