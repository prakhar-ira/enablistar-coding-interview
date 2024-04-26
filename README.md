# Coding Interview Assesment

This app is created using React, React-Redux, React-Router-DOM, React-Hook-Forms and CSS.

To start web app, RUN `npm install`. After installing, open two terminals:

1. In one terminal RUN `npm start`
2. In other terminal RUN `json-server --watch db.json --port 3001`

#### Key Points:

1. The React app will run on `PORT 3000` and mock server i.e json-server will run on `PORT 3001`.
2. There are total 4 routes in the applications `/`, `/manage-benificiaries`, `/manage-benificiaries/add` and `/manage-benificiaries/edit/:id`.
3. When you open the app you will see home page with manage benificiary button which will take you to listing page where you can do all action items.
4. All the flow is according to the doc including error validations and showing on error messages. 
5. For account number: required field as well as input type number validations are added.
6. No other framework or third part UI library is being used like MUI/Material etc. All components are created from scratch. 
7. You can sort by name in the list in ASC or DESC.

#### Doubts/Confusions:

1. In the initial part of document, one line is added `Fields: FullName, Address, Country (Dropdown any 5 country name), pincode.` that I had confusion where to use those fields. I have ignored that part and focused on the goal and basic flow given in the section next to it.


#### Enhancements/Thoughts:

Following are the enhancements that could be made but was not able to implement due to time bound:

1. Scss can be used to implement more powerful functionalities but I have stick to css as mentioned in the assesment doc.
2. A library called Easy-Peasy which is sugar coated layer of redux, can be used. It's easy to use and handy as compared to redux.
3. Client side searching and pagination could be implemented but not recommended since both these functionalities should be handled on server side.

#### Test Cases

1. Add Beneficiary:

Successful Add:

Test that adding a new beneficiary with valid data succeeds.

Verify that the beneficiary data is saved correctly in the system.

Missing Required Fields:

Test that attempting to add a beneficiary with missing required fields (e.g., name) results in an error message.

Invalid Data:

Test that adding a beneficiary with invalid data (e.g., invalid account number format) results in an error message.

2. Edit Beneficiary:

Successful Edit:

Test that editing an existing beneficiary's details with valid data succeeds.

Verify that the updated beneficiary data is reflected in the system.

Missing Required Fields:

Test that attempting to edit a beneficiary with missing required fields results in an error message.

Invalid Data:

Test that editing a beneficiary with invalid data results in an error message.

3. View Beneficiary:

Successful View:

Test that viewing an existing beneficiary retrieves the correct data.

4. Delete Beneficiary:

Successful Delete:

Test that deleting an existing beneficiary successfully removes it from the system.

Confirmation:

Test that deleting a beneficiary prompts for confirmation before proceeding.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


