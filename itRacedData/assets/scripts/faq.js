let questionsFAQ = document.querySelectorAll('.question__item');

questionsFAQ.forEach(question => {

    question.addEventListener('click', event => {
        
        const answer = question.nextElementSibling;
        if(question.classList.contains('active')) {
            question.classList.remove('active')
            answer.style.maxHeight = 0;
        } else {
            //Removing classes in all elements 
            questionsFAQ.forEach(questionItem => {
                questionItem.classList.remove('active');
                questionItem.nextElementSibling.style.maxHeight = 0;
            })
            question.classList.add('active')
            answer.style.maxHeight = answer.scrollHeight + 'px'
        }

    })
})
