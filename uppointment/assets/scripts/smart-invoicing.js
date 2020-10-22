

let items = document.querySelectorAll('.method');


let currentItem = 0;
let isEnabled = true;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    for (let i = 0; i < document.querySelectorAll('.method').length; i++) {
    document.querySelectorAll('.method')[i].classList.remove('wow','animate__animated', 'animate__fadeInLeft')
    }

}

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length; 
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active',direction)
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next',direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next',direction)
        this.classList.add('active')
        isEnabled = true
    })
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1)
    showItem('from-left')
}
document.querySelector('.arrow-left').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem)
    }
});

function nextItem(n) {
    hideItem('to-left')
    changeCurrentItem(n + 1)
    showItem('from-right')
}
document.querySelector('.arrow-right').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem)
    }
})

new WOW().init();