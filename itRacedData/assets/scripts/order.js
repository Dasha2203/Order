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


addPremises.addEventListener('click', () => { 

    let premis = document.querySelector('.premises').cloneNode(true);
    premis.querySelector('.Address').value = '';
    premis.querySelector('.Unit').value = '';
    if (premises.length === 1) { 
        premises[0].append(buttonRemove)
        let buttonRemove1 = document.createElement('div');
    buttonRemove1.append('-');
    buttonRemove1.classList.add('remove');
    removePremises = document.querySelectorAll('.remove')
        premis.append(buttonRemove1);
        removeItem(removePremises[0], 0)
    }
    containerPremises.appendChild(premis)
    removePremises = document.querySelectorAll('.remove')
    premises = document.querySelectorAll('.premises');
    removeItem(removePremises[removePremises.length-1],removePremises.length-1);

})



function removeItem(removeButton,index) {
        removeButton.addEventListener('click', () => { 
            containerPremises.removeChild(removeButton.parentNode);
            removePremises = document.querySelectorAll('.remove')
            premises = document.querySelectorAll('.premises');
            if (premises.length === 1) {
                premises[0].removeChild(removePremises[0])
            }
        })

}