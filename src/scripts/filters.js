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

export const changeFontOption = (fontStyle) =>{
    document.getElementById("targetText").style.fontFamily = fontStyle;
    document.getElementById("current-font-style").innerHTML = `Font Style: ${fontStyle}`;
}