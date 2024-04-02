# OKTA SignIn Widget Embedding and Configuring with React and Organizational OKTA  

### OUTCOME
![OKTA](https://github.com/RajkumarShanmugam1/Okta_SignIn_Widget_In_React/assets/76644058/6e6555d7-9052-4b03-b6df-d1c01b2a897f)

### Reference
- [https://developer.okta.com/docs/guides/sign-in-to-spa-embedded-widget/react/main/](https://developer.okta.com/docs/guides/sign-in-to-spa-embedded-widget/react/main/)

-----
## Create OKTA application

### OKTA Configuration:
#### 1. Setting:
   * Enable “embedded widget sign-in support” in Setting.
   * This is used to allow the configuration of Integration code.
   * Note: `If the Interaction Code checkbox doesn’t appear, the Interaction Code grant type isn’t enabled for your org.`
     ![image](https://github.com/RajkumarShanmugam1/Okta_SignIn_Widget_In_React/assets/76644058/fef9b686-85c6-4df4-b7ed-6156a24b392b)


#### 2.	Create and Configure API:
  * Go to Security -> API.

  * #### In Authorization Server:
    * Create New Authorization server or use Default one.
    * In Access Policy to Enable the Interaction code grand type on default policy rules using edit.
      ![image](https://github.com/RajkumarShanmugam1/Okta_SignIn_Widget_In_React/assets/76644058/a98ba41e-7da5-4c0f-87bf-3468d50865cf)
     
  * #### In Trust Origin:
    * Enable CORS and Redirect for your origin. [Ex : http://localhost:5500]
    * Note : `Which only allow local host in http, If i give loop back ip [127.0.0.1] Which allow both localhost and 127.0.0.1.`
      ![image](https://github.com/RajkumarShanmugam1/Okta_SignIn_Widget_In_React/assets/76644058/33642d6b-6166-49d9-b68e-41fd6e4e2037)


#### 3.	Create one Open ID Connect (OIDC) APP:
  * Go to Applications -> Applications -> Create new app.
  * Select OIDC and Single-Page Application.
  * Enter name and select the Interaction code and Refresh Token in grand type.
  * Enter correct Sign-in-redirect-URI and sign-out-URI. Ex : http://localhost:8080
  * Same URL for Email Verification Experience.
  * Assign Users.
    ![image](https://github.com/RajkumarShanmugam1/Okta_SignIn_Widget_In_React/assets/76644058/f381e565-de48-49a1-afd3-46d2875dd743)

-----
## Getting Started with Create React App

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
