document.addEventListener('DOMContentLoaded', () => {
    const htmlButton = document.getElementById('html-btn');
    const cssButton = document.getElementById('css-btn');
  
    htmlButton.addEventListener('click', () => {
      window.location.href = 'html-questions.html'; // Redirecionar para as perguntas de HTML
    });
  
    cssButton.addEventListener('click', () => {
      window.location.href = 'css-questions.html'; // Redirecionar para as perguntas de CSS
    });
  });
  