const questions = document.querySelectorAll('.question');
let currentQuestionIndex = 0;

function showResultCard(isCorrect) {
  const currentQuestion = questions[currentQuestionIndex];
  const resultCard = currentQuestion.querySelector('.result-card');
  const resultParagraph = resultCard.querySelector('p');
  const nextButton = resultCard.querySelector('.next-btn');

  if (isCorrect) {
    resultParagraph.textContent = 'Resposta correta!';
    resultParagraph.style.color = '#00a300';
  } else {
    resultParagraph.textContent = 'Resposta incorreta. Tente novamente.';
    resultParagraph.style.color = '#ff0000';
  }

  resultCard.style.display = 'block';
  nextButton.style.display = 'block';
}

function nextQuestion() {
  questions[currentQuestionIndex].style.display = 'none';
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    questions[currentQuestionIndex].style.display = 'block';
  } else {
    alert('Você respondeu todas as perguntas.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.question');
  let currentQuestionIndex = 0;

  function showResultCard(isCorrect) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultCard = currentQuestion.querySelector('.result-card');
    const resultParagraph = resultCard.querySelector('p');
    const nextButton = resultCard.querySelector('.next-btn');

    if (isCorrect) {
      resultParagraph.textContent = 'Resposta correta!';
      resultParagraph.classList.remove('incorrect');
      resultParagraph.classList.add('correct');
    } else {
      resultParagraph.textContent = 'Resposta incorreta. Tente novamente.';
      resultParagraph.classList.remove('correct');
      resultParagraph.classList.add('incorrect');
    }

    resultCard.style.display = 'block';
    nextButton.style.display = 'block';
  }

  function nextQuestion() {
    questions[currentQuestionIndex].style.display = 'none';
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      questions[currentQuestionIndex].style.display = 'block';
    } else {
      alert('Você respondeu todas as perguntas.');
    }
  }

  questions[currentQuestionIndex].style.display = 'block';

  questions.forEach((question, index) => {
    const submitButton = question.querySelector('.submit-btn');
    const nextButton = question.querySelector('.next-btn');

    submitButton.addEventListener('click', () => {
      const selectedOption = question.querySelector('input:checked');
      if (selectedOption && selectedOption.value === 'b') {
        showResultCard(true);
      } else {
        showResultCard(false);
      }
    });

    nextButton.addEventListener('click', nextQuestion);
  });
});
