const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);


//////////////////////////////////////
let displayEmployee = [];
$(document).ready(()=>{
  console.log('JQ');
  $('#Results').hide();
  $('#button').on('click', ()=>{
    displayEmployeeBonuses( employees );
    console.log(displayEmployee);
    for (let employee of displayEmployee) {
      $('#Results').show();
      let ul = $('#Results')

      ul.append('<l1>')


    }
  })

})

function employeeBonusesCal(employeeObject) {

  let totalBonus = 0;
  let rating = employeeObject.reviewRating;
  let name = employeeObject.name;
  let salary = Number(employeeObject.annualSalary);
  let bonusPercentage = calBonusAmount(employeeObject)
  let totalCompensation = 0;

  totalBonus = bonusPercentage * salary;
  totalCompensation = totalBonus + salary;

  return {
    name,
    bonusPercentage,
    totalCompensation,
    totalBonus
  }


}

function calBonusAmount(employeeObject){
  let bonusPercentage = 0;
  let rating = employeeObject.reviewRating;
  let salary = Number(employeeObject.annualSalary);

//check to see if employee has a 4 digit emplyNumber
//if so add 5%
  if(employeeObject.employeeNumber.length === 4){
  bonusPercentage += .05
  }


//check employee review rating
//add bonus base on rating
if (rating <= 2) {

  bonusPercentage += 0;


} else if (rating === 3) {

  bonusPercentage += .04;


} else if (rating === 4) {

  bonusPercentage +=  .06;


} else if (rating === 5) {

  bonusPercentage += .10;

}

console.log(salary);

if(salary > 65000){
  bonusPercentage -= .01
}

if(bonusPercentage > .13){
  bonusPercentage = .13
}

if(bonusPercentage < 0){
  bonusPercentage = 0
}
 
 return bonusPercentage
}



function displayEmployeeBonuses(employeeArray) {
  for (const employee of employeeArray) {
    let res = employeeBonusesCal(employee)
    displayEmployee.push(res);
  }
}


