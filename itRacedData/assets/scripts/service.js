let itemsSearch = document.querySelectorAll('.block-search');
let currentItemSearch = 0;
console.log(itemsSearch);

let isEnabled = true;


function changeCurrentItem(n,items) {
        currentItemSearch = (n + items.length) % items.length;
    
}

function hideItem(direction,items) {
    isEnabled = false;
    console.log(items);
        items[currentItemSearch].classList.add(direction);
        items[currentItemSearch].addEventListener('animationend', function() {
            this.classList.remove('active',direction)
        })
    
    
}

function showItem(direction,items) {
    
        items[currentItemSearch].classList.add('next',direction);
        items[currentItemSearch].addEventListener('animationend', function() {
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
function nextItem(n,items) {
    hideItem('to-left',items)
    changeCurrentItem(n + 1,items)
    showItem('from-right',items)
}


document.querySelector('.wrapper__search .left-arrow').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItemSearch, itemsSearch)
    }
});

document.querySelector('.wrapper__search .right-arrow').addEventListener('click', function() {
    console.log('нажата')
    if (isEnabled) {
        nextItem(currentItemSearch,itemsSearch)
    }
})