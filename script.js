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
    }else if (number < 0){
        let output = document.querySelector('.output');
        output.innerHTML = `Enter a valid age`;
    }else{
        return;
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
    let trueAge = document.querySelector('#age__result');

    const convertDays = d => {
        let months = 0;
        let years = 0;
        let days = 0;
        let weeks = 0;

        if(d < 0){
            if(dateVal1 > dateVal2){
                trueAge.innerHTML = 'Enter a valid age range';
            }
            return;
        }
        while(d){
           if(d >= 365){
              years++;
              d -= 365;
           }else if(d >= 30){
              months++;
              d -= 30;
           }else if(d >= 7){
              weeks++;
              d -= 7;
           }else{
              days++;
              d--;
           }
        };
        return {
           years, months, weeks, days
        };
     };

     let yearsOld = convertDays(dateInDays).years;
     let monthsOld = convertDays(dateInDays).months;
     let weeksOld = convertDays(dateInDays).weeks;
     let daysOld = convertDays(dateInDays).days;

    let result = `You are ${yearsOld} years, ${monthsOld} months, ${weeksOld} weeks and ${daysOld} days old`;
     
    if(dateVal1 !== '' && dateVal2 !== ''){
        trueAge.innerHTML = result;
    }
}

yearSubmit.addEventListener('click', displayYearsBetween);











