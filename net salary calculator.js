//  basic salary as 30,000
const basicSalary = 3000
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700;
}

// NSSF Deduction (assuming 6% of gross salary, capped at Ksh 1,080)
function calculateNSSF(grossSalary) {
    const nssf = grossSalary * 0.06;
    return nssf > 1080 ? 1080 : nssf;
}

// Payee (Tax) Calculation 
function calculateTax(grossSalary) {
    let tax;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;  // 10% for income up to 24,000
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25;  // 25% for income between 24,001 and 32,333
    } else {
        tax = 2400 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;  // 30% for income above 32,333
    }
    return tax;
}

//  calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;  // Gross salary

    // Calculate deductions
    const payeeTax = calculateTax(grossSalary);
    const nhifDeduction = calculateNHIF(grossSalary);
    const nssfDeduction = calculateNSSF(grossSalary);

    const totalDeductions = payeeTax + nhifDeduction + nssfDeduction;  // Sum of deductions
    const netSalary = grossSalary - totalDeductions;  // Net salary = Gross Salary - Deductions

    return {
        grossSalary: grossSalary,
        payeeTax: payeeTax,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary
    };
}

//  benefits from the user
const benefits = parseFloat(prompt("Enter your benefits:"));

// salary details
const salaryDetails = calculateNetSalary(basicSalary, benefits);


console.log("Basic Salary: Ksh 30000");
console.log("Benefits: Ksh " + benefits);
console.log("Gross Salary: Ksh " + salaryDetails.grossSalary);
console.log("Payee (Tax): Ksh " + salaryDetails.payeeTax);
console.log("NHIF Deduction: Ksh " + salaryDetails.nhifDeduction);
console.log("NSSF Deduction: Ksh " + salaryDetails.nssfDeduction);
console.log("Net Salary: Ksh " + salaryDetails.netSalary);


alert(
    "Basic Salary: Ksh 30000\n" +
    "Benefits: Ksh " + benefits + "\n" +
    "Gross Salary: Ksh " + salaryDetails.grossSalary + "\n" +
    "Payee (Tax): Ksh " + salaryDetails.payeeTax + "\n" +
    "NHIF Deduction: Ksh " + salaryDetails.nhifDeduction + "\n" +
    "NSSF Deduction: Ksh " + salaryDetails.nssfDeduction + "\n" +
    "Net Salary: Ksh " + salaryDetails.netSalary
);
