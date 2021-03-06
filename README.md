# Node Harvest API V2
Harvest is a web-based time tracking tool. This package is a full client API built using node.js and the V2 of Harvest API.
If you want to use the Harvest API V1 there is another package for that, [here](https://www.npmjs.com/package/harvest).
## Install
    npm install harvest-v2
## Usage

### Authentication

```js
let Harvest = require('harvest-v2');
let harvest = new Harvest({
        account_ID: config.harvest.account_id,
        access_token: config.harvest.token,
        user_agent: 'Harvest API'
    });
```

### Methods Example

Each method returns a callback with results.

```js
harvest.estimates.list(function(error, response, results) {
    if (!error) {
        console.log(results);
    }
});
```

##Testing

To run tests you need to have Harvest account, you can create a free 30-day trial account [here](https://www.getharvest.com/signup).
And you also need to change the harvest config file (test/config.auth.js) with your account information.

```js
const config = {
    account_ID: '...',
    access_token: '...',
    user_agent: 'Harvest API'
};
```

### Running the tests

    npm test
    
    # or
    
    mocha
    
## Methods
If you want to display available params for each harvest api click on it, or click [here](https://help.getharvest.com/api-v2/) to see the whole api docs.

- [Clients](https://help.getharvest.com/api-v2/clients-api/clients/clients/)
    - `list(callback)`
    - `retrieve(clientID, callback)`
    - `create({params}, callback)`
    - `update(clientID, {params}, callback)`
    - `delete(clientID, callback)`
    - `Example: `
        ```js
        harvest.clients.list()
        ```
        

- [Client Contacts](https://help.getharvest.com/api-v2/clients-api/clients/contacts/)
    - `list(callback)`
    - `retrieve(clientContactID, callback)`
    - `create({params}, callback)`
    - `update(clientContactID, {params}, callback)`
    - `delete(clientContactID, callback)`
    - `Example: `
        ```js
        harvest.clientContacts.list()
        ```
    
- [Company](https://help.getharvest.com/api-v2/company-api/company/company/)
    - `retrieve(callback)`
    - `Example: `
        ```js
        harvest.company.retrieve()
        ```
    
- [Invoices](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/)
    - `list(callback)`
    - `retrieve(invoiceID, callback)`
    - `create({params}, callback)`
    - `update(invoiceID, {params}, callback)`
    - `delete(invoiceID, callback)`
    - `Example: `
        ```js
        harvest.invoices.list()
        ```
        
- [Invoice Messages](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/)
    - `list(invoiceID, callback)`
    - `create(invoiceID, {params}, callback)`
    - `delete(invoiceID, messageID, callback)`
    - `mark(invoiceID, params, callback)`
    - `Example: `
        ```js
        harvest.invoiceMessages.list()
        ```
    
- [Invoice Payments](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-payments/)
    - `list(invoiceID, callback)`
    - `create(invoiceID, {params}, callback)`
    - `delete(invoiceID, paymentID, callback)`
    - `Example: `
        ```js
        harvest.invoicePayments.list()
        ```
    
- [Invoice Item Categories](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/)
    - `list(callback)`
    - `retrieve(invoiceItemCatID, callback)`
    - `create({params}, callback)`
    - `update(invoiceItemCatID, {params}, callback)`
    - `delete(invoiceItemCatID, callback)`
    - `Example: `
        ```js
        harvest.invoiceItemCategories.list()
        ```
    
- [Invoice Line Item](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#the-invoice-line-item-object)
    - `create(invoiceID, {params}, callback)`
    - `update(invoiceID, {params}, callback)`
    - `delete(invoiceID, {params}, callback)`
    - `Example: `
        ```js
        harvest.invoiceLineItem.create()
        ```
    
- [Estimates](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/)
    - `list(callback)`
    - `retrieve(estimateID, callback)`
    - `create({params}, callback)`
    - `update(estimateID, {params}, callback)`
    - `delete(estimateID, callback)`
    - `Example: `
        ```js
        harvest.estimates.list()
        ```
        
- [Estimate Line Item](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#the-estimate-line-item-object)
    - `create(estimateID, {params}, callback)`
    - `update(estimateID, {params}, callback)`
    - `delete(estimateID, {params}, callback)`
    - `Example: `
        ```js
        harvest.estimateLineItem.create()
        ```
        
- [Estimate Messages](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/)
    - `list(estimateID, callback)`
    - `create(estimateID, {params}, callback)`
    - `delete(estimateID, messageID, callback)`
    - `mark(estimateID, {params}, callback)`
    - `Example: `
        ```js
        harvest.estimateMessages.list()
        ```
        
- [Estimate Item Categories](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/)
    - `list(callback)`
    - `retrieve(estimateItemCatID, callback)`
    - `create({params}, callback)`
    - `update(estimateItemCatID, {params}, callback)`
    - `delete(estimateItemCatID, callback)`
    - `Example: `
        ```js
        harvest.estimateItemCategories.list()
        ```

- [Expenses](https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/)
    - `list(callback)`
    - `retrieve(expenseID, callback)`
    - `create({params}, callback)`
    - `update(expenseID, {params}, callback)`
    - `delete(expenseID, callback)`
    - `Example: `
        ```js
        harvest.expenses.list()
        ```
            
- [Expense Categories](https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/)
    - `list(callback)`
    - `retrieve(expenseCategoryID, callback)`
    - `create({params}, callback)`
    - `update(expenseCategoryID, {params}, callback)`
    - `delete(expenseCategoryID, callback)`
    - `Example: `
        ```js
        harvest.expenseCategories.list()
        ```
    
- [Tasks](https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/)
    - `list(callback)`
    - `retrieve(taskID, callback)`
    - `create({params}, callback)`
    - `update(taskID, {params}, callback)`
    - `delete(taskID, callback)`
    - `Example: `
        ```js
        harvest.tasks.list()
        ```

- [Time Entries](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/)
    - `list(callback)`
    - `retrieve(timeEntryID, callback)`
    - `create({params}, callback)`
    - `update(timeEntryID, {params}, callback)`
    - `delete(timeEntryID, callback)`
    - `restart(timeEntryID, callback)`
    - `stop(timeEntryID, callback)`
    - `Example: `
        ```js
        harvest.timeEntries.list()
        ```

- [Projects](https://help.getharvest.com/api-v2/projects-api/projects/projects/)
    - `list(callback)`
    - `retrieve(projectID, callback)`
    - `create({params}, callback)`
    - `update(projectID, {params}, callback)`
    - `delete(projectID, callback)`
    - `Example: `
        ```js
        harvest.projects.list()
        ```
        
- [Project User Assignments](https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/)
    - `list(projectID, callback)`
    - `retrieve(projectID, userAssignmentsID, callback)`
    - `create(projectID, {params}, callback)`
    - `update(projectID, userAssignmentsID, {params}, callback)`
    - `delete(projectID, userAssignmentsID, callback)`
    - `Example: `
        ```js
        harvest.projectUserAssignments.list()
        ```
        
- [Project Task Assignments](https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/)
    - `list(projectID, callback)`
    - `retrieve(projectID, taskAssignmentsID, callback)`
    - `create(projectID, {params}, callback)`
    - `update(projectID, taskAssignmentsID, {params}, callback)`
    - `delete(projectID, taskAssignmentsID, callback)`
    - `Example: `
        ```js
        harvest.projectTaskAssignments.list()
        ```
    
- [Roles](https://help.getharvest.com/api-v2/projects-api/projects/projects/)
    - `list(callback)`
    - `retrieve(roleID, callback)`
    - `create({params}, callback)`
    - `update(roleID, {params}, callback)`
    - `delete(roleID, callback)`
    - `Example: `
        ```js
        harvest.roles.list()
        ```
    
- [Users](https://help.getharvest.com/api-v2/users-api/users/users/)
    - `list(callback)`
    - `retrieve(theUser, callback)`   // for the 'theUser' param, put: me or userID
    - `create({params}, callback)`
    - `update(userID, {params}, callback)`
    - `delete(userID, callback)`
    - `Example: `
        ```js
        harvest.users.list()
        ```
    
- [User Project Assignments](https://help.getharvest.com/api-v2/users-api/users/project-assignments/)
    - `list(theUser, callback)`  // me or userID
    - `Example: `
        ```js
        harvest.userProjectAssignments.list()
        ```