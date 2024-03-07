/*
File: app.js
Author: Dobány Norbert
Copyright: 2024, Dobány Norbert
Group: Szoft I / 1 / N
Date: 2024-03-07
Github: https://github.com/notdefinitelynot/
Licenc: GNU GPL
*/

const sideAInput = document.querySelector("#sideA");
const sideBInput = document.querySelector("#sideB");
const sideCInput = document.querySelector("#sideC");
const sideDInput = document.querySelector("#sideD");

const calcButton = document.querySelector("#calcButton")
const areaInput = document.querySelector("#area")
calcButton.addEventListener('click', () => {startCalc()})

function startCalc()
{
    let sideA = Number(sideAInput.value)
    let sideB = Number(sideBInput.value)
    let sideC = Number(sideCInput.value)
    let sideD = Number(sideDInput.value)

    let halfPerimeter = Number(calcHalfPerimeter(sideA,sideB,sideC,sideD))

    let area = Number(calcArea(halfPerimeter,sideA,sideB,sideC,sideD))
    areaInput.value = area.toFixed(3)
}

function calcHalfPerimeter(sideA,sideB,sideC,sideD)
{
    return (sideA+sideB+sideC+sideD)/2
}

function calcArea(halfPerimeter,sideA,sideB,sideC,sideD)
{
    return Math.sqrt((halfPerimeter-sideA)*(halfPerimeter-sideB)*(halfPerimeter-sideC)*(halfPerimeter-sideD))
}
