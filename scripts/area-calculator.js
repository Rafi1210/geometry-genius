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
    console.log(area);
    //show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    const width =  getInputValue('rectangle-width');
    const length =  getInputValue('rectangle-length');
    console.log(width);
    console.log(length);

        //rectangle area
        const area = width * length;
        console.log(area);
        //show rectangle area
        const areaSpan = document.getElementById('rectangle-area');
        areaSpan.innerText = area;

}

function getInputValue(fieldID){
    const inputField = document.getElementById(fieldID);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}