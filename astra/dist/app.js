const menu=document.querySelector('.menu-toggle');
const menuDialog=document.getElementById('mobile-menu');
const mobileLayout=matchMedia('(max-width: 600px)');
function closeMenu(){if(menuDialog.open) menuDialog.close();}
menu.addEventListener('click',()=>{
 menuDialog.showModal();
 menu.setAttribute('aria-expanded','true');
 document.body.classList.add('menu-is-open');
});
menuDialog.querySelector('.menu-close').addEventListener('click',closeMenu);
menuDialog.addEventListener('click',event=>{if(event.target===menuDialog) closeMenu();});
menuDialog.addEventListener('close',()=>{
 document.body.classList.remove('menu-is-open');
 menu.setAttribute('aria-expanded','false');
});
menuDialog.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
 event.preventDefault();
 const target=document.querySelector(link.getAttribute('href'));
 closeMenu();
 if(target){
  target.setAttribute('tabindex','-1');
  target.focus({preventScroll:true});
  target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  history.replaceState(null,'',link.getAttribute('href'));
 }
}));
mobileLayout.addEventListener('change',event=>{if(!event.matches) closeMenu();});
const form=document.getElementById('inquiry-form');
const result=document.getElementById('inquiry-result');
const messageField=document.getElementById('prepared-message');
const dateInput=form.elements.date;
const today=new Date();
dateInput.min=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{
 form.elements.service.value=button.dataset.service;
 result.hidden=true;form.hidden=false;
 document.getElementById('inquire').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}));
form.addEventListener('submit',e=>{
 e.preventDefault();
 const data=new FormData(form);
 const date=data.get('date')?new Date(`${data.get('date')}T12:00:00`).toLocaleDateString('en-PH',{day:'numeric',month:'long',year:'numeric'}):'To be confirmed';
 messageField.value=`Hi Host Keira! I’m ${data.get('name').trim()}. I’d love to inquire about my event.\n\nEvent: ${data.get('event')}\nService: ${data.get('service')}\nDate: ${date}\nLocation / venue: ${data.get('venue').trim()||'To be confirmed'}\n\n${data.get('message').trim()||'Could you share your availability and more information?'}\n\nThank you!`;
 form.hidden=true;result.hidden=false;document.querySelector('.copy-status').textContent='';
 messageField.focus();
});
document.querySelector('.edit-inquiry').addEventListener('click',()=>{result.hidden=true;form.hidden=false;form.elements.name.focus()});
document.getElementById('copy-inquiry').addEventListener('click',async()=>{
 const status=document.querySelector('.copy-status');
 try{await navigator.clipboard.writeText(messageField.value);status.textContent='Copied. Open Instagram and paste your message to send it.'}
 catch{messageField.focus();messageField.select();status.textContent='Select and copy the message above, then paste it into Instagram.'}
});

