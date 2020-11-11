# Verserly

# Background and Overview

Verserly is an interactive editor used to create visual poetry and art. Writers, students, and teachers can use the editor to create and experiment visual poetry pieces. Erasure mode allows users to manipulate the text so certain words stand out visually, highlighting language choices in new and unexpected ways. There is also a built-in word generator that utlizes the Datamuse API to generate words for the writer that is in need of inspiration. 

Check out the right section of the editor for examples of possible creations!

[Live Demo](https://dch21.github.io/verserly/)

# Editor Toolbox

### Text Manipulation Tools

![change](/images/text_change.gif)

Writers can submit their original text or pieces that already have been written by others. This can include text such as poems, prose, recipes, articles, or historical documents. Verserly allows you to play around and explore the language of any piece of written text. Once submitted, the text appears in the editor. 

Users can then change the font style and size. They can also edit or clear the text. If more space is needed, they can increase the canvas space by width and size. 

Event listeners are added to DOM elements that are part of the editing toolbox. A change in the value of the toolbox changes the style of the text on the cavnas.
```javascript
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", () => {
  document.getElementById("targetText").style.backgroundColor = colorPicker.value;
});

const fontSize = document.getElementById("fontSize");
fontSize.addEventListener("change", () => {
  document.getElementById("targetText").style.fontSize = fontSize.value + "px"
});
```

### Erasure/Blackout Poetry Mode

![erasure](/images/erasure_mode.gif)

Writers can create [Erasure](https://poets.org/glossary/erasure) / [Blackout](https://trishhopkinson.com/2018/06/10/6-styles-of-erasure-poetry-guest-blog-post-by-erin-dorney/) Poetry using a variety of erasure filters. Users can click on a letter or word to make it disappear with a variety of settings such as blacked-out, whited-out, strike-through, and fade-out. 

### Dictionary/ Thesaurus/ Word Generator

![dict](/images/dict.gif)

Through the [Datemuse API](https://www.datamuse.com/api/), writers can lookup and generate words for inspiration.Writers can enter a word and have the website generate rhymes, synonyms, antonyms, related words, homophones, and more. Once can also enter in a noun and have the generator return related adjectives and vice versa. 

### Background Picture

Writers can add and remove background pictures to further the visual elements of their text. 

# Technology

Verserly is built with Javascript, HTML, and SCSS.
 
