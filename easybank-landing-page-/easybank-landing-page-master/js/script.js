var tog = document.querySelector('.toggle');
tog.addEventListener('click', function() {
    var mobile = document.querySelector('.nav-mobile');
    mobile.classList.toggle('mobile-toggler');

    var first = document.querySelector('.first-line');
    var second = document.querySelector('.second-line');
    var third = document.querySelector('.third-line');

    first.classList.toggle('firstr');
    third.classList.toggle('thirdr');
    second.classList.toggle('secondr');

})