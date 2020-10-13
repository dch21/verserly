// export const changeColor = () => picker.addEventListener("change", () => {
//   document.getElementById("targetText").style.backgroundColor = this.value;
// });

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
