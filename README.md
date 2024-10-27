React Project Setup Guide
This README walks you through the steps needed to set up and run my Algorithms Visualizer project. Here’s everything you need to know to test it out yourself!
And thank you so much for viewing and testing ou tmy project!

1. Install Node.js
To start, make sure you have Node.js installed. Node.js comes with npm (Node Package Manager), which you’ll use to manage dependencies in React.
https://nodejs.org/en/learn/getting-started/how-to-install-nodejs

2. Create the React Application
Open your terminal and go to or create a directerory and run the following command to create a new React app:

npx create-react-app my-react-project
This will create a folder called my-react-project (you can replace this name with whatever you prefer).

3. Navigate to Your Project Directory
After the setup completes, navigate into your project folder:

cd my-react-project

4. Start the Development Server
Run the following command to start the app:

npm start
Then, open http://localhost:3000 in your browser. The app will reload automatically as you make changes to the code.

5. Adding Extra Libraries
To add the additional packages I used (such as React Router or Bootstrap), use:

npm i bootstrap

npm i react-router-dom

This will make navigation and styling simpler!
You can read more information about them here!

https://www.npmjs.com/package/bootstrap
https://www.npmjs.com/package/react-router-dom

6. Running a Production Build(Optional)
To create a production build of the app for deployment, run:

npm run build
This command will generate a build folder containing all the files needed for hosting the app.

Project Structure Overview
Here’s a quick breakdown of the project files:

src/: Main folder with all components and app logic
index.js: Entry point for the app
App.js: Contains the app’s core functionality
public/: Stores static assets and the main HTML file
Running the App
Follow the steps above to set up and run the app. Once setup is complete, visit http://localhost:3000 in your browser to view the app in action.

About This Project
This project was bootstrapped with Create React App. Here are some additional commands:

npm start
Runs the app in development mode, viewable at http://localhost:3000. The page will reload when you make edits.

npm test
Launches the test runner in watch mode. See running tests for more info.

npm run build
Builds the app for production, optimizing the output in the build folder. Learn more about deploying in the deployment section.