document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.card').forEach(card=>{
    const img=card.querySelector('.visual>img');
    const buttons=card.querySelectorAll('.switch button');
    const toggle=card.querySelector('.toggle');
    function setSide(side){
      img.src=side==='front'?img.dataset.front:img.dataset.back;
      buttons.forEach(b=>b.classList.toggle('active',b.dataset.side===side));
      toggle.textContent=side==='front'?'BACK ↗':'FRONT ↗';
      img.alt=`${card.querySelector('h3').textContent} ${side}`;
    }
    buttons.forEach(btn=>btn.addEventListener('click',()=>setSide(btn.dataset.side)));
    toggle.addEventListener('click',()=>setSide(card.querySelector('.switch button.active').dataset.side==='front'?'back':'front'));
  });
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
});
