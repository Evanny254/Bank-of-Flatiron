# React + Vite
# Bank of Flatiron

Welcome to the Bank of Flatiron, where I am here to handle all your financial data with care and efficiency. This README will guide you through setting up and using our React application. To get a glimpse of how the app should function, take a look at the demo below:

![demo](https://curriculum-content.s3.amazonaws.com/phase-2/phase-2-code-challenge-bank-of-flatiron/demo.gif)

> Pro Tip: To view this README in VSCode, right-click on the README.md file and select "Open Preview."

## Project Overview

In this project, you'll be working on a React application that displays your recent bank transactions and offers several features to manage them. It's important to follow the provided instructions carefully. While you have some creative freedom in implementing features, adherence to the setup instructions is crucial.

## Setup
To get started with the project, follow these steps after cloning the repository:

1. Open your terminal and run npm install to install the necessary dependencies.
2. Run npm run server in your terminal. This will start the backend server on port 3000.
3. In a new terminal, run npm start. This will launch the React app on port 3000.

Ensure that you open http://localhost:3000/transactions in your browser to confirm that the backend is functioning correctly before proceeding.

If you're unfamiliar with HTML tables, you can refer to this example in the documentation.(https://www.w3schools.com/html/html_tables.asp)


## Endpoints

The base URL for your backend is: `http://localhost:3000`

## Core Deliverables

As a user, I should be able to:

- View a table of your transactions.
- Fill out and submit the form to add a new transaction. This should both update the transactions table and post the new transaction to the backend API for persistence.
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be displayed in the transactions table.

### Endpoints for Core Deliverables

#### GET /transactions

Example Response:

```json
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
```

#### POST `/transactions`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
```

Example Response:

```json
{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
```

## Advanced Deliverables

While not required to pass the code challenge, these advanced deliverables are a great way to enhance your skills if you have the extra time or wish to continue working on the project beyond the challenge.

# Note: Ensure you have a working commit with all the Core Deliverables completed before attempting the advanced features.
As a user, you should be able to:

- Sort transactions alphabetically by category or description.
- Delete a transaction which will remove it from the table and delete it from the backend.

### Endpoints for Advanced Deliverables

#### DELETE /transactions/:id

Example Response:

```json
{}
```
Thank you for taking on this challenge, and I hope you enjoy working on the Bank of Flatiron React application! If you have any questions or need assistance, please feel free to reach out. Happy coding!

## Author
Name: Evans kurgat
Email: evencherry254@gmail.com