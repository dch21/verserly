import "./styles/index.scss";
import { toggleEditable, changeFontOption, extend } from "./scripts/filters";
import { demo, internetPoet } from "../templates/demos";

window.editable = false
window.toggleEditable = toggleEditable
window.changeFontOption = changeFontOption;
window.extend = extend;
window.heightChanges = 0
window.widthChanges = 0

window.demo = demo;
window.internetPoet = internetPoet;

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", () => {
  document.getElementById("targetText").style.backgroundColor = colorPicker.value;
});

const fontSize = document.getElementById("fontSize");
fontSize.addEventListener("change", () => {
  document.getElementById("targetText").style.fontSize = fontSize.value + "px"
});

let erasureOption = "blackout";
window.erasureOption = erasureOption;

let erasureSelection = "character";
window.erasureSelection = erasureSelection;

// document.getElementById("current-style").innerHTML = `Erasure Style: ${
//   window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1)
// }`;

// document.getElementById(
//   "current-selection-style"
// ).innerHTML = `Selection Style: ${
//   window.erasureSelection.charAt(0).toUpperCase() +
//   window.erasureSelection.slice(1)
// }`;

window.changeErasureOption = (option) => {
  window.erasureOption = option

  document.getElementById("current-style").innerHTML = `Current Style: ${
    window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1)
  }`;
}

window.changeSelectionOption = (option) => {
  window.erasureSelection = option;

  document.getElementById(
    "current-selection-style"
  ).innerHTML = `Selection Style: ${
    window.erasureSelection.charAt(0).toUpperCase() +
    window.erasureSelection.slice(1)
  }`;
};


window.submitText = () => {
  const submittedText = document.getElementById("submitedText").value;

  submittedText.split("").forEach((letter) => {

    const span = document.createElement("span");
    span.className = "visible";
    span.setAttribute("contenteditable", false);
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

window.getWord = function getWord(ele) {
  
  let prev = ele.previousElementSibling
  let next = ele.nextElementSibling
  let letters = [ele]
  while (prev !== null && prev.innerHTML !== " ") {
    letters.push(prev);
    prev = prev.previousElementSibling;
    if (prev === null || prev.innerHTML === " " || prev.innerHTML === ".") {
      break;
    }
  }
  
  while (next !==  null && next.innerHTML !== " ") {
      letters.push(next)
      next = next.nextElementSibling;
      if (next === null || next.innerHTML === " " || next.innerHTML === ".") {
        break;
      }
  }
  return letters
  
}

// const submittedText =
//   "I heard a Fly buzz - when I died -\nThe Stillness in the Room\nWas like the Stillness in the Air -\nBetween the Heaves of Storm\n";

window.generateText = (submittedText) => {
  
  submittedText.split("").forEach((letter) => {
    const span = document.createElement("span");
    span.className = "visible";
    span.setAttribute("contenteditable", false);
    span.setAttribute("z-index", 3);
    span.innerHTML = letter;
    span.addEventListener("click", function () {
      if (window.erasureSelection === "character") {
        this.classList.toggle(`${window.erasureOption}`);
      } else {
        getWord(this).forEach((letterElement) => {
          letterElement.classList.toggle(`${window.erasureOption}`);
        });
      }
    });

    const paragraph = document.getElementById("targetText");
    paragraph.append(span);
  });
};

window.clearText = (area) => {
  document.getElementById(area).innerHTML = "";

  if (area === "inspiration-results") {
    document.getElementById("inspiration-results").style.display = "none"
    document.getElementById("inspiration-delete").style.display = "none"
  }
};

document.getElementById("getPicture").addEventListener("change", () => {
  const file = document.getElementById("getPicture").files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    document.getElementById("targetText").style.backgroundImage = "url(" + reader.result + ")";
  };
  if (file) reader.readAsDataURL(file);
});

let url = "http://api.datamuse.com/words?"

window.findWord = (filter) => {
  const searchTerms = document.getElementById("inspiration-search").value;
  let urlCopy = new URL(url)
  let params = new URLSearchParams(urlCopy.search);
  params.append(filter, searchTerms);
  fetch(url + params.toString()  )
    .then( resp => resp.json())
    .then((data) => pareseDisplayData(data));
};

function pareseDisplayData(data) {
  // shuffleArray(data) turn it off
  const resultsBox = document.getElementById("inspiration-results");
  data.slice(0,20).forEach( (wordObject)=> {
    const span = document.createElement("span");
    span.innerHTML = wordObject.word + " ";
    resultsBox.append(span);
  })
  resultsBox.style.display = "block"
  document.getElementById("inspiration-delete").style.display = "block";
}

//From: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

