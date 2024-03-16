function triangleCalculate()
{
    //traingle-base
    const baseField=document.getElementById('base-field')
    const basefieldValue=baseField.value;
    const baseFieldNum=parseFloat(basefieldValue)
    baseField.value=''
    //traingle-height
    const heightField=document.getElementById('height-field')
    const heightFieldValue=heightField.value;
    const heightFieldNum=parseFloat(heightFieldValue)
    heightField.value=''
    //calculate-area
    const area=0.5*baseFieldNum*heightFieldNum
    const triangleAreaSpan=document.getElementById('triangle-area')
    triangleAreaSpan.innerText=area;
}
function rectangleCalculate()
{
    //length-field
    const lengthField=document.getElementById('length-field')
    const lengthFieldValue=lengthField.value
    const lengthFieldNum=parseFloat(lengthFieldValue)
   
    lengthField.value=''
    // Width-field

    const widthField=document.getElementById('width-field')
    const widthFieldValue=widthField.value
    const widthFieldNum=parseFloat(widthFieldValue)
    widthField.value=''

    //calculate-area
    const area=lengthFieldNum*widthFieldNum
    const rectArea=document.getElementById('Rectangle-area')
    rectArea.innerText=area;
}


//functional----> reduce reusable code

   function paralleogrameCalculate()
   {
    const paraBase=getInput('para-base');
    console.log(paraBase)
    const paraHeight=getInput('para-height')
    console.log(paraHeight)
    const paraArea=paraBase*paraHeight;
    setElementText('paralleograme-area',paraArea)
   }


   function ellipseCalculate()
   {
    const majorRadius=getInput('major-radius')
    const minorRadius=getInput('minor-radius')
    const ellpseArea=3.1416*majorRadius*minorRadius
    setElementText('Ellipse-area',ellpseArea)
   }
   function getInput(field)
   {
    const inputField=document.getElementById(field);
    const inputText=inputField.value;
    const inputValue=parseFloat(inputText);
    return inputValue;
   }

   function setElementText(element,area)
   {
    const elementArea=document.getElementById(element)
    elementArea.innerText=area;

   }