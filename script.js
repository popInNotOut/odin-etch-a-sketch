const grid = document.querySelector("#grid");
const widthTextField = document.querySelector("#width");
const heightTextField = document.querySelector("#height");
const clearButton = document.querySelector("#clear-grid-button");
let width, height;
clearButton.addEventListener("click", onClearButtonClick);
createGrid();
widthTextField.addEventListener("input", onWidthChange);
heightTextField.addEventListener("input", onHeightChange);

/* start of functions */
function onGridButtonClick(e){
    const button = e.target;
    button.style.backgroundColor = "black";
}

function onClearButtonClick(){
    const buttons = grid.querySelectorAll("button");
    buttons.forEach(function(button){
        button.style.removeProperty("background-color");
    });
}

function createGrid(){
    width = widthTextField.value;
    height = heightTextField.value;

    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            const button = document.createElement("button");
            button.style.flex = "1 1 " + (100/width) + "%";
            button.style.aspectRatio = "1 / 1";
            button.addEventListener("mouseenter", onGridButtonClick);
            grid.appendChild(button);
        }
    }
}

function onWidthChange() {
    const newWidth = widthTextField.value;
    if (Number.isInteger(Number(newWidth)) && 1 <= Number(newWidth) && Number(newWidth) <= 100){
        const widthErrorMessageLabel = document.querySelector("#width-error-msg");
        widthErrorMessageLabel.textContent = "";
        onClearButtonClick();
        width = Number(newWidth);
        resetGridWithNewDimenstions();
    }
    else {
        const widthErrorMessageLabel = document.querySelector("#width-error-msg");
        widthErrorMessageLabel.textContent = "Invalid width, please enter an integer between 1 and 100";
    }
}

function onHeightChange(){
    const newHeight = heightTextField.value;
    if (Number.isInteger(Number(newHeight)) && 1 <= Number(newHeight) && Number(newHeight) <= 100){
        const heightErrorMessageLabel = document.querySelector("#height-error-msg");
        heightErrorMessageLabel.textContent = "";
        onClearButtonClick();
        height = Number(newHeight);
        resetGridWithNewDimenstions();
    }
    else {
        const heightErrorMessageLabel = document.querySelector("height-error-msg");
        heightErrorMessageLabel.textContent = "Invalid height, please enter an integer between 1 and 100";
    }
}

function resetGridWithNewDimenstions(){
    const buttons = grid.querySelectorAll("button");
    buttons.forEach(button => button.remove());
    createGrid();
}
/* end of functions */