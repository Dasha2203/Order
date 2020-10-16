let itemsBlock = document.querySelectorAll('.block-advantage');
let itemService = document.querySelectorAll('.service__item');



console.log('block');
console.log(itemsBlock);
console.log('service');
console.log(itemService)

let currentItem = 0;//block
let currentItemService = 0; //service

console.log('Первый '+currentItem);
console.log('Второй '+currentItemService);
let isEnabled = true;

function changeCurrentItem(n,items,slider) {
    if (slider === 'block-main') {
        currentItem = (n + items.length) % items.length;
        console.log(items)
        console.log('Первый '+currentItem);
    }  else if (slider === 'service-main') {
        currentItemService = (n + items.length) % items.length;
        console.log(items)
        console.log('Второй ' + currentItemService);
    } else if (slider === 'search') {
        currentItemSearch = (n + items.length) % items.length;
    }
}

function hideItem(direction,items,slider) {
    isEnabled = false;
    if (slider === 'block-main') {
        items[currentItem].classList.add(direction);
        items[currentItem].addEventListener('animationend', function() {
            this.classList.remove('active',direction)
        })
    } else if (slider === 'service-main') {
        items[currentItemService].classList.add(direction);
        items[currentItemService].addEventListener('animationend', function() {
            this.classList.remove('active',direction)
        })
    } else if (slider === 'search') {
        items[currentItemSearch].classList.add(direction);
        items[currentItemSearch].addEventListener('animationend', function() {
            this.classList.remove('active',direction)
        })
    }
    
}

function showItem(direction,items,slider) {
    if (slider === 'block-main') {
        items[currentItem].classList.add('next',direction);
        items[currentItem].addEventListener('animationend', function() {
            this.classList.remove('next',direction)
            this.classList.add('active')
            isEnabled = true
        })
    } else if ( slider === 'service-main') {
        items[currentItemService].classList.add('next',direction);
        items[currentItemService].addEventListener('animationend', function() {
        this.classList.remove('next',direction)
        this.classList.add('active')
        isEnabled = true
    })
    } else if ( slider === 'search') {
        items[currentItemSearch].classList.add('next',direction);
        items[currentItemSearch].addEventListener('animationend', function() {
        this.classList.remove('next',direction)
        this.classList.add('active')
        isEnabled = true
    })
    }
    
}

function previousItem(n,items, slider) {
    hideItem('to-right',items,slider);
    changeCurrentItem(n - 1,items,slider)
    showItem('from-left',items,slider)
}
document.querySelector('.left-arrow').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem,itemsBlock, 'block-main');
    }
});

function nextItem(n,items,slider) {
    hideItem('to-left',items,slider)
    changeCurrentItem(n + 1,items,slider)
    showItem('from-right',items,slider)
}
document.querySelector('.right-arrow').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem,itemsBlock,'block-main');
    }
})
// Animate for service-item
document.querySelector('.arrow-left').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItemService, itemService, 'service-main')
    }
});

document.querySelector('.arrow-right').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItemService,itemService, 'service-main')
    }
})






