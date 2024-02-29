const container = document.querySelector('.container');
const questionNumber = document.getElementById('questionNo')
const question = document.getElementById('question')
const options = document.querySelector('.options')
const submit = document.getElementById('Submit')
const start = document.getElementById('start')
let score = 0

const questions = [
    {
        question: "What is the syntax to declare an array of objects in JavaScript?",
        options: [
            "var myArray = [];",
            "var myArray = {};",
            "var myArray = [{}];",
            "var myArray = [{}, {}];"
        ],
        answer: "var myArray = [{}, {}];"
    }, {
        question: "How do you access the value of a specific property in an object within an array?",
        options: [
            "myArray[property];",
            "myArray[index].property;",
            "myArray[index]['property'];",
            "myArray.property;"
        ],
        answer: "myArray[index]['property'];"
    },
    {
        question: "How can you add a new object to an existing array of objects?",
        options: [
            "myArray.push({});",
            "myArray.add({});",
            "myArray.insert({});",
            "myArray.append({});"
        ],
        answer: "myArray.push({});"
    },
    {
        question: "What method is used to remove the last object from an array of objects?",
        options: [
            "myArray.pop();",
            "myArray.removeLast();",
            "myArray.deleteLast();",
            "myArray.splice(-1, 1);"
        ],
        answer: "myArray.pop();"
    },
    {
        question: "Which method is used to find the index of a specific object in an array of objects based on a property value?",
        options: [
            "findIndex()",
            "indexOf()",
            "search()",
            "getPropertyIndex()"
        ],
        answer: "findIndex()"
    }

];

let currentQuestion = 0;

function startQuiz() {
    console.log('Called');
    score = 0;
    currentQuestion = 0;
    container.style.display = "block"
    start.style.display = "none"
    loadQuestion()
}


function loadQuestion() {

    questionNumber.innerText = `Question ${currentQuestion + 1}`

    question.innerText = questions[currentQuestion].question
    options.innerText = ""
    questions[currentQuestion].options.forEach((option) => {
        let choice = document.createElement('button')
        choice.className = "bg-slate-800 text-white text-lg px-[20px] py-[10px] block w-[40%] m-[5px] rounded-md cursor-pointer hover:bg-slate-700"
        choice.innerText = option
        options.appendChild(choice)

        choice.addEventListener('click', () => checkAnswer(option))
    })
}

function checkAnswer(userSelected) {
    if (userSelected === questions[currentQuestion].answer) {
        score++
    }
    currentQuestion++

    if (currentQuestion < questions.length) {
        loadQuestion()
    } else {
        endGame()
    }
}



function endGame() {
    container.style.display = "none";
    showResult();
}

function showResult() {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    resultContainer.className = " bg-white p-[30px] rounded-2xl w-[60%]"

    const scoreElement = document.createElement('h1');
    scoreElement.textContent = `You Scored ${score} out of ${questions.length}`;
    scoreElement.className = "text-3xl text-center"

    const restartButton = document.createElement('button');
    restartButton.textContent = "Restart";
    restartButton.className = "bg-green-500 text-white text-lg px-[20px] py-[10px] block w-[20%] mt-[10px] rounded-md cursor-pointer hover:bg-green-600 float-right";
    restartButton.addEventListener('click', startQuiz);

    resultContainer.appendChild(scoreElement);
    resultContainer.appendChild(restartButton);

    document.body.appendChild(resultContainer);
    restartButton.addEventListener('click', () => {
        resultContainer.remove();
        startQuiz()
    });
}



submit.onclick = endGame
start.onclick = startQuiz
container.style.display = "none"



