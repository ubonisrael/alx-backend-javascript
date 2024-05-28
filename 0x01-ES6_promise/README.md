# ES6 Promises

An introduction to working with javascript (ES6) promises.

## Setup
Install NodeJS 12.11.x (in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

**Install Jest, Babel, and ESLint in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.**

## Tasks
**0. Keep every promise you make and only make promises you can keep**
- Return a Promise using this prototype function getResponseFromAPI()


**1. Don't make a promise...if you know you can't keep it**
Using the prototype below, return a promise. The parameter is a boolean.
```
getFullResponseFromAPI(success)
```
When the argument is:
- true
    - resolve the promise by passing an object with 2 attributes:
        - status: 200
        - body: 'Success'
- false
    - reject the promise with an error object with the message The fake API is not working currently


**2. Catch me if you can!**
Using the function prototype below
```
function handleResponseFromAPI(promise)
```
Append three handlers to the function:
- When the Promise resolves, return an object with the following attributes
    - status: 200
    - body: success
- When the Promise rejects, return an empty Error object
- For every resolution, log Got a response from the API to the console


**3. Handle multiple successful promises**
In this file, import uploadPhoto and createUser from utils.js

Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.
```
function handleProfileSignup()
```
In the event of an error, log Signup system offline to the console


**4. Simple promise**
Using the following prototype
```
function signUpUser(firstName, lastName) {
}
```
That returns a resolved promise with this object:
```
{
  firstName: value,
  lastName: value,
}
```


**5. Reject the promises**
Write and export a function named uploadPhoto. It should accept one argument fileName (string).

The function should return a Promise rejecting with an Error and the string $fileName cannot be processed
```
export default function uploadPhoto(filename) {
}
```
