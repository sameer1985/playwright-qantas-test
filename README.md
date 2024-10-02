# Qantas Hotel Booking Automation Project

This project automates the testing of the Qantas hotel booking functionality using [Playwright](https://playwright.dev/). The goal is to test the hotel search and booking features of the [Qantas Hotels](https://www.qantas.com/hotels) website.

## Prerequisites

Ensure the following tools are installed on your system:

- **Node.js**: Version 14 or later
- **Playwright**: Playwright will be installed as a dependency, no need for manual installation
- **Git** (optional): For version control
- **An IDE**: Such as Visual Studio Code

## Project Structure
tests/: Contains the test files for the Qantas hotel booking feature, written in Playwright.
playwright.config.ts: The configuration file for Playwright, where you can define browser options, test directories, and other settings.
package.json: Defines project dependencies and scripts, including the setup for Playwright.
node_modules/: Contains all the dependencies installed via npm.
report/: Stores the Playwright test reports.

## Running the Tests
To run the tests, follow these steps:

### Step 1: Open Terminal/Command Line
Navigate to the project directory:

bash
Copy code
cd path/to/qantas-hotel-booking
### Step 2: Install Dependencies
Ensure all dependencies are installed by running:

bash
Copy code
npm install
### Step 3: Execute the Tests
To run the Playwright tests, use the following command:

bash
Copy code
npx playwright test
This command will launch Playwright, execute the tests, and display the results in the terminal.

### Step 4: Run Tests in Headless Mode
To run the tests in headless mode (without opening a browser window), update the playwright.config.ts file by setting headless: true:

typescript
Copy code
use: {
  headless: true,
  ...
}
Then, you can run the tests as usual:

bash
Copy code
npx playwright test
### Step 5: View Test Results
Once the test run completes, results will appear in the terminal. You can also generate a detailed HTML report by running:

bash
Copy code
npx playwright show-report
This command opens the report in your default browser, providing insights into test execution.
