document.querySelector("#flipBtn").addEventListener("click", showResult);
document.querySelector("#coin").addEventListener("click", showResult);

function showResult() { 
    const resultDiv = document.querySelector("#result");
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    resultDiv.textContent = `${result}`;
}