$( document ).ready(readyNow);

function readyNow() {
    $('#generateButton').on('click', generateButton);
}

let generateCount = 0; //creating the variable that counts the clicks
// ^this must be outside of the function

function generateButton() {
    generateCount++; //so our count increments by 1

    let element = $('.rectangle'); //so js knows what element to append to the dom
    element.append(`<div class="generate">
    <p>${generateCount}</p>
    
    </div>`);
}