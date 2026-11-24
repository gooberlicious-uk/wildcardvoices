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
// FAQs: slide the answer open and closed. Without JS, or with reduced motion, details toggles natively.
var mq=window.matchMedia?window.matchMedia('(prefers-reduced-motion: reduce)'):null;
document.querySelectorAll('details').forEach(function(d){
var s=d.querySelector('summary');if(!s)return;
var a=document.createElement('div'),anim=null;a.className='faq-a';
while(s.nextSibling)a.appendChild(s.nextSibling);
d.appendChild(a);
s.addEventListener('click',function(e){
if((mq&&mq.matches)||!a.animate)return;
e.preventDefault();
var opening=!d.open||d.classList.contains('closing');
var h=d.open?a.getBoundingClientRect().height:0,o=d.open?getComputedStyle(a).opacity:0;
if(anim){anim.cancel();anim=null;}
if(opening){d.classList.remove('closing');d.open=true;}else d.classList.add('closing');
anim=a.animate([{height:h+'px',opacity:o},{height:(opening?a.scrollHeight:0)+'px',opacity:opening?1:0}],{duration:300,easing:'ease'});
anim.onfinish=function(){anim=null;if(!opening){d.open=false;d.classList.remove('closing');}};
});
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
