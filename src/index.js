import "./styles/index.scss";

let erasureOption = "blackout";
window.erasureOption = erasureOption;

let erasureSelection = "character";
window.erasureSelection = erasureSelection;

document.getElementById("current-style").innerHTML = `Current Erasure Style: ${
  window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1)
}`;

document.getElementById(
  "current-seclection-style"
).innerHTML = `Current Selection Style: ${
  window.erasureSelection.charAt(0).toUpperCase() +
  window.erasureSelection.slice(1)
}`;

window.changeErasureOption = function changeErasureOption(option) {
  window.erasureOption = option

  document.getElementById("current-style").innerHTML = `Current Style: ${
    window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1)
  }`;

}

window.changeSelectionOption = function changeSelectionOption(option) {
  window.erasureSelection = option;

  document.getElementById(
    "current-seclection-style"
  ).innerHTML = `Current Selection Style: ${
    window.erasureSelection.charAt(0).toUpperCase() +
    window.erasureSelection.slice(1)
  }`;
};




// window.submitText = function submitText() {
//   const submittedText = document.getElementById("submitedText").value;

//   submittedText.split("").forEach((letter) => {

//     const span = document.createElement("span");
//     span.className = "visible";
//     span.innerHTML = letter;
//     span.addEventListener("click", function() {
//       this.classList.toggle(`${window.erasureOption}`);
//     });

//     const paragraph = document.getElementById("targetText");
//     paragraph.append(span);
//   });
// };

window.submitText = function submitText() {
  const submittedText = document.getElementById("submitedText").value;

  submittedText.split("").forEach((letter) => {

    const span = document.createElement("span");
    span.className = "visible";
    span.innerHTML = letter;
    span.addEventListener("click", function() {
      if (window.erasureSelection === "character") {
        this.classList.toggle(`${window.erasureOption}`);
      } else {
        getWord(this).forEach((letterElement)=>{
          letterElement.classList.toggle(`${window.erasureOption}`);
        })
      }
    });

    const paragraph = document.getElementById("targetText");
    paragraph.append(span);
  });
};

function getWord(ele) {
  let prev = ele.previousElementSibling
  let next = ele.nextElementSibling
  let letters = [ele]
  while (prev !== null && prev.innerHTML !== " ") {
    letters.push(prev);
    prev = prev.previousElementSibling;
    if (prev.innerHTML === " ") {
      break;
    }
  }
  
  while (next !==  null && next.innerHTML !== " ") {
      letters.push(next)
      next = next.nextElementSibling;
      if (next.innerHTML === " ") {
        break;
      }
  }
  
  return letters
}

window.clearText = function clearText() {
  const submittedText = document.getElementById("targetText").innerHTML = "";
};
