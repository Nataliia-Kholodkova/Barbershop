let navigation = document.querySelector('.navigation');
let navigation_btn_open = document.querySelector('.menu-btn__open');
let navigation_btn_close = document.querySelector('.menu-btn__close');

navigation.classList.remove('navigation__opened');

navigation_btn_open.addEventListener('click', function (event) {
    event.preventDefault();
    navigation.classList.add('navigation__opened')
});

navigation_btn_close.addEventListener('click', function (event) {
    event.preventDefault();
    navigation.classList.remove('navigation__opened')
});

function advantageToggle(index) {
    let dots = document.querySelector('.container-advantages').querySelectorAll('.dot');
    let advantage = document.querySelectorAll('.advantage');
    advantage.forEach(function (v, i, arr) {
        arr[i].classList.remove('advantage__active')
    });

    dots.forEach(function (v, i, arr) {
        arr[i].classList.remove('dot__active')
    });

    dots[index].classList.add('dot__active');
    advantage[index].classList.add('advantage__active');

}

function reviewLeft(index, review) {
    if (index === 0) {
        review.style.left = '0'
    }
    else if (index === 1) {
        review.style.left = '-100%'
    }

    else if (index === 2) {
        review.style.left = '-200%'
    }
}

function reviewToggle(index) {
    let dots = document.querySelector('.container-reviews').querySelectorAll('.dot');
    let review = document.querySelector('.container-reviews').querySelector('.reviews-list');

    dots.forEach(function (v, i, arr) {
        arr[i].classList.remove('dot__active')
    });

    dots[index].classList.add('dot__active');
    reviewLeft(index, review)
}

function reviewNextPrev(step) {
    let dots = document.querySelector('.container-reviews').querySelectorAll('.dot');
    let review = document.querySelector('.container-reviews').querySelector('.reviews-list');
    let current_index = -1;
    let index = -1;

    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains('dot__active')) {
            current_index = i;
            break
        }
    }

    if (current_index + step >= dots.length) {
        index = 0;
    }
    else if (current_index + step < 0) {
        index =  dots.length - 1;
    }
    else  {
        index = current_index + step
    }

    dots.forEach(function (v, i, arr) {
        arr[i].classList.remove('dot__active')
    });

    dots[index].classList.add('dot__active');
    reviewLeft(index, review)
}

function loginFormOpen(event) {
    let overlay = document.querySelector('.overlay');
    let form = document.querySelector('.login-form');
    navigation.classList.remove('navigation__opened');
    form.classList.remove('login-form__closed');
    form.classList.add('login-form__opened');
    overlay.classList.add('overlay__opened');
}

function loginFormClose(event) {
    let overlay = document.querySelector('.overlay');
    let form = document.querySelector('.login-form');
    form.classList.add('login-form__closed');
    form.classList.remove('login-form__opened');
    overlay.classList.remove('overlay__opened');
}
