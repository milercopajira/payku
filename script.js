const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "¿Qué es el payko en la cultura andina?",
        answers: {
            a: "Una planta medicinal",
            b: "Un instrumento musical",
            c: "Un tejido tradicional"
        },
        correctAnswer: "a"
    },
    {
        question: "¿Para qué se utiliza tradicionalmente el payko?",
        answers: {
            a: "Como alimento básico",
            b: "Para rituales y salud",
            c: "Para construcción"
        },
        correctAnswer: "b"
    }
];

function buildQuiz(){
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} de ${myQuestions.length} correctas`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
