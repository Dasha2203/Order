let premises = document.querySelectorAll('.premises');
let containerPremises = document.querySelector('.wrapper-premises');
let addPremises = document.querySelector('.add');
let removePremises = document.querySelectorAll('.remove');
const clearForm = document.querySelector('.clear');
let formOrder = document.querySelector('.form-order');

let buttonRemove = document.createElement('div');
    buttonRemove.append('-');
    buttonRemove.classList.add('remove');
clearForm.addEventListener('click', () => formOrder.reset() );


addPremises.addEventListener('click', () => { // обрабатываем нажатие на добваления нового айтема
    
    // зде копирую блок, чтобы потом такой же его вставить
    let premis = document.querySelector('.premises').cloneNode(true);
    console.log('скопированный элемент')
    console.log(premis)
    premis.querySelector('.Address').value = '';
    premis.querySelector('.Unit').value = '';
    // у первого айтема нет кнопки удалить, поэтому
    // я здесь проверяю если всего их один, то первому добавляю кнопку удалить
    if (premises.length === 1) { 
        premises[0].append(buttonRemove)
        let buttonRemove1 = document.createElement('div');
    buttonRemove1.append('-');
    buttonRemove1.classList.add('remove');
    removePremises = document.querySelectorAll('.remove')
        premis.append(buttonRemove1);
        removeItem(removePremises[0], 0)
    }
    //здесь переобъявляю кнопку
    
    console.log(buttonRemove)
    // добавляю кнопку в блок, который буду вставлять
    //premis.append(buttonRemove1)
    console.log('блок, котоырй добавляем')
    console.log(premis)
    containerPremises.appendChild(premis)// вставляю сам блок
    removePremises = document.querySelectorAll('.remove')// обновляю количество кнопок для удаления
    premises = document.querySelectorAll('.premises'); // обновляю количество блоков
    console.log('remove: ' + removePremises.length)
    console.log('all: ' + premises.length)
    removeItem(removePremises[removePremises.length-1],removePremises.length-1);
     console.log('все блоки')
    console.log(premises);
})



function removeItem(removeButton,index) {

        // if (removePremises.length === 2) {
        //     removePremises[0].addEventListener('click', () => { 
        //         containerPremises.removeChild(premises[0]);
        //         removePremises = document.querySelectorAll('.remove')
        //         premises = document.querySelectorAll('.premises');
        //         console.log('то, что яхочу удалть');
        //         console.log(removePremises[0])
        //         if (premises.length === 1) {
        //             premises[0].removeChild(removePremises[0])
        //         }
        //         console.log('после удаления ' + removePremises.length)
        //     })
        // }

        removeButton.addEventListener('click', () => { 
            console.log('clock')
            containerPremises.removeChild(removeButton.parentNode);
            removePremises = document.querySelectorAll('.remove')
            premises = document.querySelectorAll('.premises');
            console.log('то, что яхочу удалть');
            console.log(removePremises[0])
            if (premises.length === 1) {
                premises[0].removeChild(removePremises[0])
            }
            console.log('после удаления ' + removePremises.length)
        })

}