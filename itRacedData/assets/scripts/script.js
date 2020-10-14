let itemsBlock = document.querySelectorAll('.block-advantage');
let itemService = document.querySelectorAll('.service__item')

let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n,items) {
    currentItem = (n + items.length) % items.length; 
}

function hideItem(direction,items) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active',direction)
    })
}

function showItem(direction,items) {
    items[currentItem].classList.add('next',direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next',direction)
        this.classList.add('active')
        isEnabled = true
    })
}

function previousItem(n,items) {
    hideItem('to-right',items);
    changeCurrentItem(n - 1,items)
    showItem('from-left',items)
}
document.querySelector('.left-arrow').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem,itemBlock)
    }
});

function nextItem(n,items) {
    hideItem('to-left',items)
    changeCurrentItem(n + 1,items)
    showItem('from-right',items)
}
document.querySelector('.right-arrow').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem,itemsBlock)
    }
})
// Animate for service-item
document.querySelector('.arrow-left').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem, itemService)
    }
});

document.querySelector('.arrow-right').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem,itemService)
    }
})

