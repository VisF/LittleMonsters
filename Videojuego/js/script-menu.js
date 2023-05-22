window.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const scoreFinal = urlParams.get('score');
    const scoreFinalElement = document.getElementById("scoreFinal");
    if (scoreFinalElement) {
      scoreFinalElement.textContent = "Score: " + scoreFinal;
    }
  });
  