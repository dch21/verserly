import "./styles/index.scss";

// console.log("Webpack is working!");

window.submitText = function submitText() {
  const submittedText = document.getElementById("submitedText").value;

  submittedText.split("").forEach((letter) => {

    const span = document.createElement("span");
    span.className = "visible";
    span.innerHTML = letter;
    const paragraph = document.getElementById("targetText");
    console.log(paragraph)
    paragraph.append(span);
  });

//   document.getElementById("outputtext").innerHTML = span;
};


