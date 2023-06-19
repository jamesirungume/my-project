function outputSalary() {
    const basicSalary = document.getElementById("basicsalary");
    const benefits = document.getElementById("benefits")
    const basicsalary = Number(basicSalary.value)
    const  benefit =  Number(benefits.value)
    const grossSalary = basicsalary + benefits;
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
      } else if (grossSalary <= 32333) {
        tax = grossSalary * 0.25;
      } else {
        tax = grossSalary * 0.3;
      }
let nhifDeductions = 0;
    
  if (grossSalary <= 5999) {
    nhifDeductions = 150;
  } else if (grossSalary <= 7999) {
    nhifDeductions = 300;
  } else if (grossSalary <= 11999) {
    nhifDeductions = 400;
  } else if (grossSalary <= 14999) {
    nhifDeductions = 500;
  } else if (grossSalary <= 19999) {
    nhifDeductions = 600;
  } else if (grossSalary <= 24999) {
    nhifDeductions = 750;
  } else if (grossSalary <= 29999) {
    nhifDeductions = 850;
  } else if (grossSalary <= 34999) {
    nhifDeductions = 900;
  } else if (grossSalary <= 39999) {
    nhifDeductions = 950;
  } else if (grossSalary <= 44999) {
    nhifDeductions = 1000;
  } else if (grossSalary <= 49999) {
    nhifDeductions = 1100;
  } else if (grossSalary <= 59999) {
    nhifDeductions = 1200;
  } else if (grossSalary <= 69999) {
    nhifDeductions = 1300;
  } else if (grossSalary <= 79999) {
    nhifDeductions = 1400;
  } else if (grossSalary <= 89999) {
    nhifDeductions = 1500;
  } else if (grossSalary <= 99999) {
    nhifDeductions = 1600;
  } else {
    nhifDeductions = 1700;
  }
  let nssfDeductions = 0;

  if (grossSalary <= 6000) {
    nssfDeductions = grossSalary * 0.06;
  } else if (grossSalary <= 18000) {
    nssfDeductions = grossSalary * 0.06;
  }
  const netsalary = grossSalary - tax - nhifDeductions - nssfDeductions;
document.getElementById("gsalary").textContent = `gross salary ${grossSalary}`
document.getElementById("tax").textContent = `tax ${tax}`
document.getElementById("nhifdeducts").textContent = `nhif deductions ${nhifDeductions}`
document.getElementById("nssfdeducts").textContent = `nssf deduction ${nssfDeductions}`
}
