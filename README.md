# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start-dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Quick questions

#### 1. Highlight something in your project that you thought was especially interesting or significant to your overall implementation.
 - Using Github's GraphQL API was a great choice for this implementation as opposed to REST as it gives the flexibility on the data we need.

#### 2. Tell us about what you are most pleased or proud of with your implementation.
 - Combining the power of Apollo Client & GraphQL-Codegen was a plus as it made development much easier.
 - Apollo provided great state management for the queries out of the box
 - GraphQL-Codegen made it easier to generate types & hooks for our queries
 
#### 3. Given more time, what would the next feature or improvement you would like to add to your project?
 - Adding a details page would be great, to showcase more information about a selected user, and leverage more of the v4 API
 - Have a better separation of concerns for example moving the search logic to it's own hook and having components consume the hook instead



