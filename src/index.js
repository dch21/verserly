import "./styles/index.scss";

let erasureOption = "blackout";
window.erasureOption = erasureOption;

document.getElementById("current-style").innerHTML = 
`Current Style: ${erasureOption.charAt(0).toUpperCase() + erasureOption.slice(1)
}`;

window.changeErasureOption = function changeErasureOption(option) {
  erasureOption = option
}




window.submitText = function submitText() {
  const submittedText = document.getElementById("submitedText").value;

  submittedText.split("").forEach((letter) => {

    const span = document.createElement("span");
    span.className = "visible";
    span.innerHTML = letter;
    span.addEventListener("click", function() {
      this.classList.toggle("blackout");
    });

    const paragraph = document.getElementById("targetText");
    paragraph.append(span);
  });
};

window.clearText = function clearText() {
  const submittedText = document.getElementById("targetText").innerHTML = "";
};
