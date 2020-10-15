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

