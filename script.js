let menuIcon = document.querySelector('#menu-icon');
let navbar  =  document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle(' bx-x')
    navbar.classList.toggle('active')
};

let sections = document.querySelectorAll('section');
let navlinks=  document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset= sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
          

        if (top =>offset && top < offset+height) {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
                
            });

        };
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scroll > 100)
    menuIcon.classList.remove(' bx-x')
    navbar.classList.remove('active')

};
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

const typed = new Typed('.single-text',{
    strings:['Web Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxl1xnMLMiWNhwPPO1xLgX6KdY6TQIr3XtsrFLO1ST_qO573Ynwt85o3e_30msO1Ec/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

