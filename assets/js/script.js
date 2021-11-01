const hamburger = document.querySelector('.hamburger');
const respoNav = document.querySelector('#responsive-nav');
const closeBtn = document.querySelector('#close');

hamburger.addEventListener('click', (e) => {
    e.preventDefault()

    respoNav.classList.add('show');
    console.log('click')
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault()

    respoNav.classList.remove('show');
})