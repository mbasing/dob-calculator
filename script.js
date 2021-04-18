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

const yearSubmit = document.querySelector('#calculate');

let displayYearsBetween=()=>{
    let dateVal1 = document.querySelector('#birthDate').value;
    let dateVal2 = document.querySelector('#ageAtDateOfBirth').value;

    let date_diff = (date1, date2)=>{
        dt1 = new Date(date1);
        dt2 = new Date(date2);

        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }

    let dateInDays = date_diff(dateVal1, dateVal2);
    let yearsOld = Math.round(dateInDays/365);
    let monthsOld = dateInDays % 365;

    let result = `You are ${yearsOld} years and ${monthsOld} months old`;
    let trueAge = document.querySelector('#age__result');

    if(dateVal1 !== '' && dateVal2 !== ''){
        trueAge.innerHTML = result;
    }

    if(dateVal1 > dateVal2){
        trueAge.innerHTML = 'Enter a valid age range';
    }
}

yearSubmit.addEventListener('click', displayYearsBetween);











