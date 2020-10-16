let premises = document.querySelectorAll('.premises');
let containerPremises = document.querySelector('.wrapper-premises');
let addPremises = document.querySelector('.add');
let removePremises = document.querySelectorAll('.remove');
const clearForm = document.querySelector('.clear');
let formOrder = document.querySelector('.form-order');

clearForm.addEventListener('click', () => formOrder.reset() );


addPremises.addEventListener('click', () => {
    let premis = document.querySelector('.premises').cloneNode(true);
    let buttonRemove = document.createElement('div');
    buttonRemove.append('-');
    buttonRemove.classList.add('remove')
    premis.appendChild(buttonRemove)
    
    containerPremises.appendChild(premis)
    removePremises = document.querySelectorAll('.remove')
    premises = document.querySelectorAll('.premises');
    console.log('remove: ' + removePremises.length)
    console.log('all: ' + premises.length)
    removeItem();
})



function removeItem() {
    
    for (let i = 0; i < removePremises.length; i++) {
        removePremises[i].addEventListener('click', () => {
            
            containerPremises.removeChild(premises[i+1]);
            
            console.log('после удаления ' + removePremises.length)
        })

        removePremises = document.querySelectorAll('.remove')
            premises = document.querySelectorAll('.premises');

    }
}