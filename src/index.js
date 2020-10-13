import "./styles/index.scss";
// import { changeColor } from "./scripts/filters";

const colorPicker = document.getElementById("colorPicker");

colorPicker.addEventListener("change", function() {
  document.getElementById("targetText").style.backgroundColor = this.value;
});

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
    span.setAttribute("contenteditable", true);
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


window.generateText = function generateText() {
const submittedText = "I heard a Fly buzz - when I died -\nThe Stillness in the Room\nWas like the Stillness in the Air -\nBetween the Heaves of Storm\n"

submittedText.split("").forEach((letter) => {
  const span = document.createElement("span");
  span.className = "visible";
  span.setAttribute("contenteditable", true);
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
});};

window.clearText = function clearText() {
  const submittedText = document.getElementById("targetText").innerHTML = "";
};


document.getElementById("getval").addEventListener("change", readURL, true);
function readURL() {
  var file = document.getElementById("getval").files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById("targetText").style.backgroundImage =
      "url(" + reader.result + ")";
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }
}

// window.addEventListener("load", function () {
//   document
//     .querySelector('input[type="file"]')
//     .addEventListener("change", function () {
//       if (this.files && this.files[0]) {
//         var img = document.querySelector("img"); // $('img')[0]
//         img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        // img.setAttribute("display", "absolute");
           
        // img.onload = imageIsLoaded;
        
//       }
//     });

    
// });

// function imageIsLoaded() { 
//   const pic = document.getElementById("user-picture");
//   pic.setAttribute("display", "absolute");
//   alert(this.src); // blob url
//   // update width and height ...
// }