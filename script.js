const grid = document.querySelector("#grid");
const widthTextField = document.querySelector("#width");
const heightTextField = document.querySelector("#height");
const clearButton = document.querySelector("#clear-grid-button");
let width, height;
clearButton.addEventListener("click", onClearButtonClick);
widthTextField.addEventListener("input", onWidthChange);
heightTextField.addEventListener("input", onHeightChange);
window.addEventListener("load", () => {
    createGrid()
});

/* start of functions */
function onGridButtonEnter(e){
    const button = e.target;
    button.style.backgroundColor = "black";
    toggleGlow(e);
}

function onGridButtonLeave(e){
    toggleGlow(e);
}

function onGridButtonClick(e){
    const button = e.target;
    button.style.backgroundColor = "black";
}

function toggleGlow(e) {
  const box = e.target;
  const isGlowing = box.style.boxShadow !== "";

  if (isGlowing) {
    box.style.boxShadow = "";
  } else {
    box.style.boxShadow = "0 0 20px 5px rgba(0, 255, 255, 0.7)";
  }
}

function onClearButtonClick(){
    const buttons = grid.querySelectorAll("div");
    buttons.forEach(function(button){
        button.style.removeProperty("background-color");
    });
}

function createGrid(){
    width = widthTextField.value;
    height = heightTextField.value;

    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            const button = document.createElement("div");
            button.style.boxSizing = "border-box";
            button.style.border = "1px solid black";
            button.style.width = grid.getBoundingClientRect().width / width + "px";
            button.style.height = grid.getBoundingClientRect().height / height + "px";
            button.style.flex = "1 0 auto";
            button.addEventListener("mouseenter", onGridButtonEnter);
            button.addEventListener("mouseleave", onGridButtonLeave);
            button.addEventListener("click", onGridButtonClick);
            grid.appendChild(button);
        }
    }
}

function onWidthChange() {
    const newWidth = widthTextField.value;
    if (Number.isInteger(Number(newWidth)) && 1 <= Number(newWidth) && Number(newWidth) <= 50){
        const widthErrorMessageLabel = document.querySelector("#width-error-msg");
        widthErrorMessageLabel.textContent = "";
        onClearButtonClick();
        width = Number(newWidth);
        resetGridWithNewDimenstions();
    }
    else {
        const widthErrorMessageLabel = document.querySelector("#width-error-msg");
        widthErrorMessageLabel.textContent = "Invalid width, please enter an integer between 1 and 50";
    }
}

function onHeightChange(){
    const newHeight = heightTextField.value;
    if (Number.isInteger(Number(newHeight)) && 1 <= Number(newHeight) && Number(newHeight) <= 50){
        const heightErrorMessageLabel = document.querySelector("#height-error-msg");
        heightErrorMessageLabel.textContent = "";
        onClearButtonClick();
        height = Number(newHeight);
        resetGridWithNewDimenstions();
    }
    else {
        const heightErrorMessageLabel = document.querySelector("#height-error-msg");
        heightErrorMessageLabel.textContent = "Invalid height, please enter an integer between 1 and 50";
    }
}

function resetGridWithNewDimenstions(){
    const buttons = grid.querySelectorAll("div");
    buttons.forEach(button => button.remove());
    createGrid();
}
/* end of functions */