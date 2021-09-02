const quizData = [
    {
        question: "Which animal is known as the ‘Ship of the Desert?",
        a: "Sheep",
        b: "Horse",
        c: "Camel",
        d: "Cactus",
        answer: 'c'
    }, {
        question: "How many colors are there in a rainbow?",
        a: "6",
        b: "7",
        c: "8",
        d: "5",
        answer: 'b'
    }, {
        question: "In which direction does the sun rise?",
        a: "East",
        b: "West",
        c: "South",
        d: "North",
        answer: 'a'
    }, {
        question: "What is a baby frog called?",
        a: "Tadpole",
        b: "Madpole",
        c: "Catpole",
        d: "Froggy",
        answer: 'a'
    }, {
        question: "Which is the largest mammal?",
        a: "Blue Shark",
        b: "Blue Whale",
        c: "Mammoth",
        d: "NOTA",
        answer: 'b'
    }
]

const answersEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")
const quiz = document.getElementById('quiz');

let currentQuestion = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAll()
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let tmp = undefined;
    answersEl.forEach(answerEl => {
        if (answerEl.checked) {
            tmp = answerEl.id;
        }
    })
    return tmp;
}

function deselectAll() {
    answersEl.forEach(answerEl => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    let answerSelected = getSelected();

    if (answerSelected) {
        const correctAnswer = quizData[currentQuestion].answer;
        currentQuestion++;
        if (correctAnswer === answerSelected) {
            score++;
        }
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You have scored ${score} out of ${quizData.length}</h2>
                                <button onclick="location.reload()">Reload</button>`;
        }
    } else {
        console.log("Please select an option");
    }
})
