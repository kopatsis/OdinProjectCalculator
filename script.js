var curnum = 0;
var curnumSt = `${curnum}`;
const display = document.querySelector('.display');
display.textContent = curnumSt;

const numButtons = document.querySelectorAll('.num');
numButtons.forEach(button => button.addEventListener('click', function displayNum(event){
    if (decIn == false){
        curnum = curnum*10 + parseInt(event.target.textContent);
        curnumSt = `${curnum}`;                
        display.textContent = curnumSt;
    } else{
        curnum += parseFloat(event.target.textContent)*(Math.pow(10, decPlace));
        curnum = Math.round(curnum * Math.pow(10,decPlace*-1)) / Math.pow(10,decPlace*-1);
        decPlace--;
        if(event.target.textContent == '0'){
            curnumSt += '0';
        } else {
            curnumSt = `${curnum}`;
        }
        display.textContent = curnumSt;
    }
}));

var decPlace = 0;
var decIn = false;
const decButton = document.querySelector('#dot');
decButton.addEventListener('click', function decPt() {
    if (decIn == true) return;
    decIn = true;
    curnumSt = `${curnum}`;
    curnumSt += '.';
    display.textContent = curnumSt;
    decPlace--;
});

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function reset(){
    curnum = 0;
    curnumSt = `${curnum}`;
    display.textContent = curnumSt;
    decIn = false;
    decPlace = 0;
    currArray.length = 0;
});

var currArray = [];
const operators = document.querySelectorAll('.op');
operators.forEach(operator => operator.addEventListener('click', function operate(event){
    currArray.push(curnum);
    currArray.push(event.target.textContent);
    decIn = false;
    decPlace = 0;
    curnum = 0;
}));

const equals = document.querySelector('#eq');
equals.addEventListener('click', function allOperations(){
    currArray.push(curnum);
    let firstnum = currArray[0];
    for(let i = 1; i < currArray.length; i+=2){
        let operation = currArray[i];
        let secondnum = currArray[i+1];
        switch(operation){
            case "+": 
                firstnum = firstnum + secondnum;
                break;
            case "-": 
                firstnum = firstnum - secondnum;
                break;
            case "×": 
                firstnum = firstnum * secondnum;
                break;
            case "÷": 
                firstnum = firstnum / secondnum;
                break;
        }
    }
    curnum = firstnum;
    currArray.length = 0;
    decIn = false;
    decPlace = 0;
    curnumSt = `${curnum}`;
    display.textContent = curnumSt; 
    curnum = 0;
});

const percent = document.querySelector('#percent');
percent.addEventListener('click', function perc(){
    curnum /= 100;
    curnumSt = `${curnum}`;
    display.textContent = curnumSt;             
});

const backs = document.querySelector('#delete');
backs.addEventListener('click', function bs(){
    if (curnumSt.length > 1){curnumSt = curnumSt.slice(0,-1);}
    else {curnumSt = '0';}
    display.textContent = curnumSt;
    curnum = parseFloat(curnumSt);
});

const fact = document.querySelector('.fact');
fact.addEventListener('click', function factorial(){
    if (curnum > 16) return;
    if (curnum < 0) return;
    if (!Number.isInteger(curnum)) return;
    if (curnum == 0 || curnum == 1) curnum = 1;
    for (let i = curnum - 1; i > 1; i--){
        curnum *= i;
    }
    curnumSt = `${curnum}`;
    display.textContent = curnumSt;     
});

const buttons = document.querySelectorAll('.butt');
buttons.forEach(button => button.addEventListener('click', function classAdd(event){
    event.target.classList.add('clicked');
}));

buttons.forEach(button => button.addEventListener('transitionend', function classRem(event){
    event.target.classList.remove('clicked');
}));

window.addEventListener('keyup', function clicker(event){
    let key = event.key;
    if(key=="Backspace") backs.click();
    else if(key=="Delete") resetButton.click();
    else if(key=="=" || key=="Enter") equals.click();
    else if(key=="!") fact.click();
    else if(key=="%") percent.click();   
    else if(key==".") decButton.click();     
    else if(key=="/") operators[0].click();
    else if(key=="*") operators[1].click();
    else if(key=="-") operators[2].click();
    else if(key=="+") operators[3].click();
    else if(key=="7") numButtons[0].click();
    else if(key=="8") numButtons[1].click();
    else if(key=="9") numButtons[2].click();
    else if(key=="4") numButtons[3].click();
    else if(key=="5") numButtons[4].click();
    else if(key=="6") numButtons[5].click();
    else if(key=="1") numButtons[6].click();
    else if(key=="2") numButtons[7].click();
    else if(key=="3") numButtons[8].click();
    else if(key=="0") numButtons[9].click();
});