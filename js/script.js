const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');

const quizData = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    options: ['<script>', '<js>', '<scripting>', '<javascript>'],
    answer: '<script>'
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    options: ['the <body> section', 'the <head> section', 'in a seperate file', 'all answers'],
    answer: 'all answers'
  },
  {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    options: ['<script name = "xxx.js">', '<script href = "xxx.js">', '<script src = "xxx.js">', 'all answers'],
    answer: '<script src = "xxx.js">'
  },
  {
    question: 'The external JavaScript file must contain the <script> tag.',
    options: ['False', 'True'],
    answer: 'False'
  },
  {
    question: 'How do you create a function in JavaScript?',
    options: ['function myFunction()', 'function:myFunction()', 'function = myFunction()'],
    answer: 'function myFunction()'
  },  
  {
    question: 'How to write an IF statement in JavaScript?',
    options: ['if i = 5 then', 'if i = 5', 'if i == 5 then', 'if (i == 5)'],
    answer: 'if (i == 5)'
  },

];

let currentQuestion = 0;
let score = 0;


function showQuiz() {
  const currentQuiz = quizData[currentQuestion];
  
  questionContainer.textContent = currentQuiz.question;
  optionsContainer.innerHTML = '';

  currentQuiz.options.forEach((option) => {
    const optionElement = document.createElement('button');
    optionElement.textContent = option;
    optionElement.classList.add('option');
    optionsContainer.appendChild(optionElement);
  });
}

function checkAnswer(selectedOption) {
  const currentQuiz = quizData[currentQuestion];

  if (selectedOption === currentQuiz.answer) {
    score += 10;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuiz();
  } else {
    showResults();
  }
}

function showResults() {
  quizContainer.innerHTML = `<h2>Your Score: ${score}/${quizData.length*10}</h2>`;
}

showQuiz();


optionsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('option')) {
    checkAnswer(e.target.textContent);
  }
});


