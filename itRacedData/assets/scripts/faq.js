//FAQ's
let questionItem = document.querySelectorAll('.question__item');
console.log(questionItem);

// for (let i = 0; i < questionItem.length; i++) {
//     console.log(questionItem[i]);
//     questionItem[i].addEventListener('click', () => {
//         alert('произошло нажатие')
//         console.log(questionItem[i].classList.contain('active'))
//     })
// }

for (let i =0; i < questionItem.length; i++) {
    questionItem[i].addEventListener('click', ()=> {
        if (!questionItem[i].classList.contains('active')) {
            questionItem[i].classList.add('active');
        } else {
            questionItem[i].classList.remove('active');
        }
    })
}
