function calculateTriangleArea(){
    //get triangle-base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value; // baseValueText is a string now
    const base = parseFloat(baseValueText); // getting the string as a number 
    console.log(baseValueText);

    //get triangle-height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value; // baseValueText is a string now
    const height = parseFloat(heightValueText); // getting the string as a number 
    console.log(heightValueText);
    
    //triangle area
    const area = 0.5 * base * height;
    console.log('Triangle Area : '+area);
    //show triangle area
    const areaSpan = document.getElementById('triangle-area'); // used to display the calculated area of the triangle on the webpage
    areaSpan.innerText = area; 
    //The innerText property of an HTML element is used to get or set the text content inside that element
}

function calculateRectangleArea(){
    const width =  getInputValue('rectangle-width');
    const length =  getInputValue('rectangle-length');
    console.log(width);
    console.log(length);

    if(isNaN(width) || isNaN(length)){
       alert('Not a Number'); 
       return; //return to stop from going to forward
    }
        //rectangle area
        const area = width * length;
        console.log('Rectangle Area : '+area);
        //show rectangle area
        const areaSpan = document.getElementById('rectangle-area');
        areaSpan.innerText = area;

}

function calculateParallelogramArea(){

    const base =  getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
   
    if(isNaN(base) || isNaN(height)){
        alert('Not a Number'); 
        return; //return to stop from going to forward
     }
   
    //calculateParallelogramArea
    const area = base * height;
    console.log('Parallelogram Area : '+area);
    //show ParallelogramArea
    setElementInnerText('parallelogram-area', area);

    addToCalculationEntry('parallelogram', area); 
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert('Not a Number'); 
        return; //return to stop from going to forward
     }

    const area = Math.PI * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2); // fixed to two decimal number//
    console.log('Ellipse Area : '+areaTwoDecimal);

    setElementInnerText('ellipse-area', areaTwoDecimal);
}

function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');

    if(isNaN(perimeter) || isNaN(apothem)){
        alert('Not a Number'); 
        return; //return to stop from going to forward
     }
    const area = 0.5 * perimeter * apothem;
    const areaTwoDecimal = area.toFixed(2); // fixed to two decimal number//
    console.log('Pentagon Area : '+areaTwoDecimal);
    setElementInnerText('pentagon-area', areaTwoDecimal);
}

function calculateRhombusArea(){
    const first_diagonal = getInputValue('first-diagonal');
    const second_diagonal = getInputValue('second-diagonal');

    if(isNaN(first_diagonal) || isNaN(second_diagonal)){
        alert('Not a Number'); 
        return; //return to stop from going to forward
     }
    const area = 0.5 * first_diagonal * second_diagonal;
    const areaTwoDecimal = area.toFixed(2); // fixed to two decimal number//
    console.log('Rhombus Area : '+areaTwoDecimal);
    setElementInnerText('rhombus-area', areaTwoDecimal);
}


//reusable get input value field function
function getInputValue(fieldID){
    const inputField = document.getElementById(fieldID);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

//reusable set span, p, div, text etc
function setElementInnerText(elementID, area){
    const element = document.getElementById(elementID);
    element.innerText = area;
}

//add to calculation entry
/**
 * 1. get the element where you want to add the dynamic html
 * 2. Create an element where you want to add
 * 3. If needed add some class
 * 4. Set innerHTML, it could be dynamic template string
 * 5. Append the created element as a child of the parent

 */
function addToCalculationEntry(areaType, area){
    console.log(areaType+' '+area);
    const calculationEntry = document.getElementById('calculation-entry');

    const p = document.createElement('p');
    p.classList.add('my-4');
    // p.innerHTML = areaType + ' ' + area;
    p.innerHTML = `${areaType} ${area} cm <sup>2</sup> <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Convert
</span>
</button> `
    calculationEntry.appendChild(p);
}
//Data Validation
/*
* 1.set the proper type of the input field(number, date, email)
* 2. check type using typeof
* 3. NaN means : Not a Number. isNaN is checking whether the in input
is not a number or not. For string it will return true as it is not a number.
*/