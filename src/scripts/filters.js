export const toggleEditable = () => {
 const spans = document.querySelectorAll("span")
 if (!window.editable) {
     spans.forEach((span)=> {
         span.setAttribute("contenteditable", true);
     })
     window.editable = true
 } else {
     spans.forEach((span) => {
       span.setAttribute("contenteditable", false);
     });
     window.editable = false;
 }
   document.getElementById("editable-button").innerHTML = window.editable ? "Editable: On" : "Editable: Off"
};

export const toggleErasable = () => {
  window.eraseable = !window.eraseable
  document.getElementById("erasable-button").innerHTML = window.eraseable ? "Erasure: On" : "Erasure: Off"
};



export const extend = (direction) => {
      if (direction === "height") {
        window.heightChanges += 1
        document.getElementById("targetText").style.height = 500 + (10 * window.heightChanges) + "px"
      } else {
        window.widthChanges += 1;
        document.getElementById("targetText").style.width = 700 + (10 * window.widthChanges) + "px"
      }
}

export const changeFontOption = (fontStyle) =>{
    document.getElementById("targetText").style.fontFamily = fontStyle;
    document.getElementById("current-font-style").innerHTML = `Font Style: ${fontStyle}`;
}

