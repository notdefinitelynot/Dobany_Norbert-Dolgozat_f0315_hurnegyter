const sideAInput = document.querySelector("#sideA");
const sideBInput = document.querySelector("#sideB");
const sideCInput = document.querySelector("#sideC");
const sideDInput = document.querySelector("#sideD");

const calcButton = document.querySelector("#calcButton")
const areaInput = document.querySelector("#area")
calcButton.addEventListener('click', () => {startCalc()})

function startCalc()
{
    const sideA = Number(sideAInput.value)
    const sideB = Number(sideBInput.value)
    const sideC = Number(sideCInput.value)
    const sideD = Number(sideDInput.value)

    const halfArea = Number(calcHalfArea(sideA,sideB,sideC,sideD)).toFixed(3)

    const area = Number(calcArea(halfArea,sideA,sideB,sideC,sideD))
    areaInput.value = area.toFixed(3)
}

function calcHalfArea(sideA,sideB,sideC,sideD)
{
    return (sideA+sideB+sideC+sideD)/2
}

function calcArea(halfArea,sideA,sideB,sideC,sideD)
{
    return Math.sqrt((halfArea-sideA)*(halfArea-sideB)*(halfArea-sideC)*(halfArea-sideD))
}
