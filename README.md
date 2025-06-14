﻿# Credit Calculator

This project is a simple credit calculator built with HTML, CSS (or SCSS), and JavaScript (ES6). It allows users to input the loan amount and repayment period, and calculates the daily repayment amount and total repayment. The interest rate is fixed at 2.2% per day.

Website: https://nadiasun.github.io/CreditCalculator/

## Project Features

- **Loan Amount Input**: Users can input the loan amount manually or adjust it using a slider. The loan amount has a range of 1000 to 50000 UAH.
- **Repayment Period Input**: Users can select the repayment period (in days) using an input field or a slider. The period can range from 7 to 60 days.
- **Dynamic Calculation**: As the user adjusts the loan amount or repayment period, the daily repayment and total repayment amounts are recalculated automatically.
- **Validation**: Fields are validated to ensure that the input values are within the allowed limits.
- **Error Handling**: If any of the inputs are invalid, an error message is displayed and the submit button is disabled.

## Technologies Used

- **HTML5** for structuring the page
- **CSS** for styling
- **JavaScript (ES6)** for interactivity and calculations

## How to Run the Project

### 1. Clone the Repository

First, clone the repository to your local machine.

```bash
git clone https://github.com/yourusername/credit-calculator.git
```

### 2. Navigate to the Project Folder

```bash
cd credit-calculator
```

### 3. Open the `index.html` File in a Browser

You can open the `index.html` file directly in your browser to run the project.

### 4. Customize and Develop

You can modify the code as needed, or enhance the project with additional features like connecting to a real server for submitting data.

## How It Works

- **User Input**: The user enters a loan amount and repayment period.
- **Calculation**: The calculator computes the daily repayment and total repayment based on a fixed interest rate of 2.2% per day.
- **Data Display**: The daily repayment and total repayment values are displayed on the page.
- **Submission**: When the user clicks the "Отримати кредит" (Get Credit) button, an object with the loan data is created, simulating the data submission process.

## Example of the Data Object for Submission:

{
"loanAmount": 10000,
"loanTerm": 30,
"dailyRepayment": 126.6,
"totalRepayment": 3798,
"createdAt": "2025-04-07T11:21:55.184Z"
}

## Error Handling

If any input value is invalid, an error message will be shown under the corresponding input field, and the "Get Credit" button will be disabled until all values are corrected.

## Authors and Contributions

Developed by: Nadia Kurakina Issues and pull requests are welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
