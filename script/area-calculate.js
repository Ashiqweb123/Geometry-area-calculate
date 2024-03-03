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