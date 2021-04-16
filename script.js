// ==================================================================
// Computes year of birth after a user enters a valid age
// ==================================================================

let findYear = document.querySelector('#findYear');
findYear.addEventListener('click',()=>{
    let number = document.querySelector('#number').value;

    if((number !== "") && (number >=0)){
        let parsedNumber = parseInt(number);
        let currentYear = new Date().getFullYear();
        let output = document.querySelector('.output');
        let display = document.createElement('div');
        display.className = "result"
        output.appendChild(display);
        let yearOfBirth = currentYear - parsedNumber;
        output.innerHTML = `Your birth year is ${yearOfBirth}`;
    }else{
        return ;
    }
})


// ==================================================================
// Computes the age differerence between two birth dates
// ==================================================================

let birthDate = document.querySelector('#birthDate').value;
let ageAtDateOfBirth =document.querySelector('#ageAtDateOfBirth').value;
let calculateDateDifference = document.querySelector('#calculate');

