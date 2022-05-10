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

function employeeBonuses(employeeObject) {

  let totalBonus = 0;
  let rating = employeeObject.reviewRating;
  let name = employeeObject.name;
  let totalCompensation = 0;

  if (rating <= 2) {

    totalBonus += 0;

    totalCompensation += totalBonus + Number(employeeObject.annualSalary);

  } else if (rating === 3) {

    totalBonus += employeeObject.annualSalary * .04;

    totalCompensation += totalBonus + Number(employeeObject.annualSalary);

  } else if (rating === 4) {

    totalBonus += employeeObject.annualSalary * .06;

    totalCompensation += totalBonus + Number(employeeObject.annualSalary);

  } else if (rating === 5) {

    totalBonus += employeeObject.annualSalary * .010;

    totalCompensation += totalBonus + Number(employeeObject.annualSalary);
  }
  return totalCompensation;
}

let bonus = employeeBonuses(employees[1]);
console.log(bonus);

function LoopBonuses(arrayObjects) {
    for (const employeee of arrayObjects) {
      let eBonus = employeeBonuses(employeee);
      console.log(eBonus);
      
    }
  
}

LoopBonuses(employees);