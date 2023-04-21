const togglers = document.querySelectorAll('#toggler');
const nav = document.querySelector('.navbar > ul');

togglers.forEach(btn => {
    btn.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
})